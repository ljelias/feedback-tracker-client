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
      student_id: e.target.student.value,
      topic_name: topicName,
      topic_content: e.target.infoA.value
    }
    this.setState({topicInfo: newTopicDetails});

    this.postNewSession(newSessionInfo);
  }

  postNewSession = (newSessionInfo) => {
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
    let newSessionTopic = {
      lesson_id: session_id,
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
      let session_id = data.id;
      this.postNewTopics(session_id);
    })
    .catch(err => console.log('Error with request'))

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
      <option key={i} value={student.id}>{student.firstName} {student.lastName}</option>
      )

    return (<>
      <header className='top'>
        <Link to={`/teacher`}>
          <button className='toDashboard'>Back to instructor dashboard</button>
        </Link>

        <h2>New Lesson</h2>
      </header>
        
      <section className='lessonNotesForm'>
        <form className='sessionNotes' onSubmit = {e => {this.getFormValues(e)}}>
          <label htmlFor='stdName' className='notesField'>Student:&nbsp;
            <select id='stdName' name='student' defaultValue={'DEFAULT'} onChange={e => {this.getTopicsForStudent(e)}}>
              <option value="DEFAULT" disabled>Choose a student</option>
              {studentOptions}
            </select>
          </label>
          <label htmlFor='sessionDate' className='notesField'>Date:&nbsp;
            <input type='date' id='sessionDate' name='date' />
          </label>

          <NewTopic studentTopics={this.state.studentTopics} />

        <button type='submit' className='saveNewNotes'>Save Lesson</button>      
  
        <label htmlFor='nextInfo' className='infoField'>Other info:
          <textarea type='text' id='nextInfo' name='nextInfo' rows='4' placeholder='provide additional info such as next session date or proposed topics or other general reminders'></textarea>
        </label>
      </form>
    </section>
  </>
      );
  }
}

export default NewLessonPage;

/*


*/