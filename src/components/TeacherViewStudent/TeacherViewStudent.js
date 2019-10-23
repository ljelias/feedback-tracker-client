import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TeacherViewStudent.css';
import NoteViewOptions from '../NoteViewOptions/NoteViewOptions';
import StudentDetailsDisplay from '../StudentDetails/StudentDetailsDisplay';
import StudentDetailsEdit from '../StudentDetails/StudentDetailsEdit';

class TeacherViewStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStudent: {},
      studentTopics: [],
      editStudentInfo: false,
      error: null
    };
  }
  setEditStudent(show) {
    this.setState({ editStudentInfo: show });
  }
  setCurrentStudent(currentStudent){
    this.setState ({
      currentStudent: currentStudent
    })
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/students/${this.props.match.params.student}`)
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
        this.setState({currentStudent: data});
      })
      .catch(err => {
        this.setState({ error: err.message });
      });

      fetch(`http://localhost:8000/api/topics/${this.props.match.params.student}`)
      .then(response => {
        if(!response.ok) {
          console.log('Error.');
          throw new Error('Something went wrong');
        }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({studentTopics: data});
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  render() {
    const studentInfoSection = this.state.editStudentInfo
    ? <StudentDetailsEdit showEditing={show => this.setEditStudent(show)} 
        currentStudent={this.state.currentStudent} 
        resetStudent={student => this.setCurrentStudent(student)} /> 
    : <StudentDetailsDisplay showEditing={show => this.setEditStudent(show)} currentStudent={this.state.currentStudent} />;

    return (<>
      <header className='stdTop'>
        <Link to={`/teacher`}>
          <button className='toDashboard'>Back to instructor dashboard</button>
        </Link>
        <h2 className='stdTopTitle'>Student Overview:</h2>
        <p className='stdName'>{this.state.currentStudent.firstName}&nbsp;{this.state.currentStudent.lastName}</p>
      </header>
      <main className='row'>
        <div className='columnA'>
          <Link to={`/lesson`}><button className='newLesson'>Create new lesson notes</button></Link>

          <section className='basicInfo'>

            <div className=''>
              {studentInfoSection}
            </div>
          </section>
        </div>
        <div className='columnB'>
          <div className='previousLessons'>
            <h4 className='previousLessonsTitle'>View lesson notes</h4>
            <NoteViewOptions studentId={this.state.currentStudent.id} studentTopics={this.state.studentTopics}/>
          </div>
        </div>
      </main>
    </>
    );
  }
}

export default TeacherViewStudent;