import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    fetch(`http://localhost:8000/api/sessions/${this.props.match.params.lesson}`)
      .then(response => {
        if(!response.ok) { console.log('Error.');
                           throw new Error('Something went wrong'); }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
    fetch(`http://localhost:8000/api/students/${studentId}`)
    .then(response => {
      if(!response.ok) { console.log('Error.');
                         throw new Error('Something went wrong'); }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({currentStudent: data});
    })
    .catch(err => {
      this.setState({ error: err.message });
    });  
  }
  getSessionTopics = (sessionId) => {
    fetch(`http://localhost:8000/api/topics/session/${sessionId}`)
    .then(response => {
      if(!response.ok) { console.log('Error.');
                         throw new Error('Something went wrong'); }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({lessonTopics: data});
    })
    .catch(err => {
      this.setState({ error: err.message });
    });  
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
      <header className='lessonTitle'>
        <h2>Lesson Summary</h2>
        <p>Student: <span className='italic'>{student.firstName} {student.lastName}</span></p>
        <p>Date: <span className='italic'>{lesson.lesson_date}</span></p>
        <Link to={`/teacher/${student.id}`}><button>Back to student overview</button></Link>
      </header>

      <section>
        {topicSet}
      </section>

      <section className='nextSessionInfo'>
        <div className='nextSessionDetails'>
          <h4 className='nextSessionTitle'>Next Session:</h4>
          <p>{lesson.next_session_info}</p>
        </div>
      </section>
  
    </>
    );
  }
}

export default SingleLessonView;
