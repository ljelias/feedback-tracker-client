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
      error: null
    };
  }

  getTopicsForStudent = (e) => {
    e.preventDefault();
    let studentId = e.target.value;
    console.log(studentId);
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
      console.log(data);
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

    console.log(this.state.roster);
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
        <form className='sessionNotes'>
          <label htmlFor='stdName' className='notesField'>Student:&nbsp;
            <select id='stdName' defaultValue={'DEFAULT'} onChange={e => {this.getTopicsForStudent(e)}}>
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
          <textarea type='text' id='nextInfo' rows='4' placeholder='provide additional info such as next session date or proposed topics or other general reminders'></textarea>
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