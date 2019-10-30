import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config.js';
import './SingleLessonView.css';

class SingleLessonView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLesson: [],
      currentStudent: {},
      lessonTopics: [],
      error: null
    };
  }

  componentDidMount() {
    fetch(`${config.API_BASE_URL}/sessions/${this.props.match.params.lesson}`)
      .then(response => {
        if(!response.ok) { console.log('Error.');
                           throw new Error('Something went wrong'); }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({currentLesson: data});
        let student = data.student_id;
        this.getStudentInfo(student);
        let session = data.id;
        this.getSessionTopics(session);
      })
      .catch(err => {
        this.setState({ error: err.message });
      });  
  }

  getStudentInfo = (studentId) => {
    fetch(`${config.API_BASE_URL}/students/${studentId}`)
    .then(response => {
      if(!response.ok) { console.log('Error.');  throw new Error('Something went wrong'); }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({currentStudent: data});
    })
    .catch(err => {
      this.setState({ error: err.message });
    });  
  }
  getSessionTopics = (sessionId) => {
    fetch(`${config.API_BASE_URL}/topics/session/${sessionId}`)
    .then(response => {
      if(!response.ok) { console.log('Error.');
                         throw new Error('Something went wrong'); }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({lessonTopics: data});
    })
    .catch(err => {
      this.setState({ error: err.message });
    });  
  }
  convertDate2 = (itemDate) => {
    let rawDate = new Date(itemDate);
    let arr = rawDate.toString().split(' ');
    let dateString = arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3];
    return dateString;
  }

  

  render() {
    let student = this.state.currentStudent;
    let lesson = this.state.currentLesson;
    let topics = this.state.lessonTopics;
    let topicSet = topics.map((topic, i) => <div key={i} className='lessonTopicDiv'>
          <header className='topicHeader'>
            <h4 className='topicTitle'>Topic: <span className='italicspan'>{topic.topic_name}</span></h4>
          </header>
          <div className='topicDetails'><p>{topic.topic_content}</p></div>
        </div>);


    return (<>
      <header className='specificLessonTop'>
        <Link to={`/teacher/${student.id}`}>
          <button className='toDashboard'>Back to student overview</button>
        </Link>

        <h2 className='singleLessonTitle'>Single Lesson Summary</h2>
      </header>

      <main className='row2'>

        <section className='columnA2'>

          <p className='singleLessonP'>Student:&nbsp;<span className='italic'>{student.first_name} {student.last_name}</span></p>

          <div className='nextSessionDetails'>
            <h4 className='nextSessionTitle'>Other Info:</h4>
            <p>{lesson.next_session_info}</p>
          </div>
        </section>

        <section className='columnB2'>
        <p className='singleLessonP'>Topics for Lesson Date:&nbsp;<span className='italic'>{this.convertDate2(lesson.lesson_date)}</span></p>

          {topicSet}
        </section>
      </main>
    </>
    );
  }
}

export default SingleLessonView;
