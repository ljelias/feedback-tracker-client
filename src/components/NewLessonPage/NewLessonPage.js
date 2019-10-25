import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewLessonPage.css';
import NewTopic from './NewTopic.js';

class NewLessonPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStudent: {},
      roster: [],
      studentTopics: [],
      sessionInfo: {},
      topicInfo: {},
      linkId: '',
      submitted: false,
      error: null
    };
  }

  getFormValues = (e) => {
    e.preventDefault();
    let newSessionInfo = {
      student_id: e.target.student.value,
      lesson_date: e.target.date.value,
      next_session_info: e.target.nextInfo.value
    };
    this.setState({sessionInfo: newSessionInfo});

    let topicName = e.target.optionA.value;
    if (topicName ==='Other') {
      topicName = e.target.optionA2.value;
    }

    let newTopicDetails = {
      lesson_date: e.target.date.value,
      student_id: e.target.student.value,
      topic_name: topicName,
      topic_content: e.target.infoA.value
    }
    this.setState({topicInfo: newTopicDetails});
    console.log(newTopicDetails);
    this.postNewSession(newSessionInfo);
  }

  postNewSession = (newSessionInfo) => {
    console.log(newSessionInfo);

    let options = {
      method: 'POST',
      body: JSON.stringify(newSessionInfo),
      headers: { "Content-Type": "application/json" }
    };
    fetch('http://localhost:8000/api/sessions', options)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong'); //throw an error
      }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let session_id = data.id;
      console.log(session_id);
      this.postNewTopics(session_id);
    })
    .catch(err => console.log('Error with request'))
  }
  postNewTopics = (session_id) => {
    console.log(session_id);
    let newSessionTopic = {
      lesson_id: session_id,
      lesson_date: this.state.topicInfo.lesson_date,
      student_id: parseInt(this.state.topicInfo.student_id),
      topic_name: this.state.topicInfo.topic_name,
      topic_content: this.state.topicInfo.topic_content
    }
    console.log(newSessionTopic);

    let options = {
      method: 'POST',
      body: JSON.stringify(newSessionTopic),
      headers: { "Content-Type": "application/json" }
    };
    fetch('http://localhost:8000/api/topics', options)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong'); //throw an error
      }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let student = data.student_id;
      this.showLinkToStudentPage(student);
    })
    .catch(err => console.log('Error with request'))

  }

  showLinkToStudentPage = (studentId) => {
    this.setState({linkId: studentId});
    this.setState({submitted: true});
  }


  getTopicsForStudent = (e) => {
    e.preventDefault();
    let studentId = e.target.value;
    this.handleGetTopics(studentId);
  }
  handleGetTopics = (id) => {
    fetch(`http://localhost:8000/api/topics/${id}`)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong');
      }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({studentTopics: data});
    })
    .catch(err => {
      this.setState({ error: err.message });
    });
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/students')
      .then(response => {
        if(!response.ok) {
          console.log('Error.');
          throw new Error('Something went wrong'); //throw an error
        }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const students = data;
        this.setState({roster: students});
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }


  render() {

    let studentOptions = this.state.roster.map((student, i) =>
      <option key={i} value={student.id}>{student.first_name} {student.last_name}</option>
      )

    let bottomLink = this.state.submitted 
      ? <Link to={`/teacher/${this.state.linkId}`}><div className='result'>Successfully submitted!<div className='goToStudent'>Go to the student overview page</div></div></Link>
      : <div></div>

    return (<>
      <header className='newLessonTop'>
        <Link to={`/teacher`}>
          <button className='backToDash'>Back to instructor dashboard</button>
        </Link>
        <h2 className='newLessonHead'>New Lesson</h2>
      </header>
        
      <section className='lessonNotesForm'>
        <form className='sessionNotes' onSubmit = {e => {this.getFormValues(e)}}>
          <button type='submit' className='saveNewNotes'>Save Lesson</button>      

          <label htmlFor='stdName'>Student:&nbsp;
            <select id='stdName' className='smallBox' name='student' defaultValue={'DEFAULT'} onChange={e => {this.getTopicsForStudent(e)}}>
              <option value="DEFAULT" disabled>Choose a student</option>
              {studentOptions}
            </select>
          </label><br/>
          <label htmlFor='sessionDate' >Date:&nbsp;
            <input type='date' id='sessionDate' className='smallBox' name='date' />
          </label>

          <NewTopic studentTopics={this.state.studentTopics} />

          <label htmlFor='nextInfo' className='infoField'>Other info:<br/>
          <textarea type='text' id='nextInfo' name='nextInfo' rows='4' placeholder='provide additional info such as next session date or proposed topics or other general reminders'></textarea>
        </label>
      </form>
      {bottomLink}
    </section>
  </>
      );
  }
}

export default NewLessonPage;

/*


*/