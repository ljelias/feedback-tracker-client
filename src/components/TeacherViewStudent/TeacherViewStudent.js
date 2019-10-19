import React, { Component } from 'react';
import './TeacherViewStudent.css';
import NoteViewOptions from '../NoteViewOptions/NoteViewOptions';
import StudentDetailsDisplay from '../StudentDetails/StudentDetailsDisplay';
import StudentDetailsEdit from '../StudentDetails/StudentDetailsEdit';

class TeacherViewStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStudent: {},
      editStudentInfo: false,
      error: null
    };
  }

  setEditStudent(show) {
    this.setState({ editStudentInfo: show });
  }
  setCurrentStudent(currentStudent){
    this.setState ({
      currentStudent: {currentStudent}
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
  }


  render() {
    const studentInfoSection = this.state.editStudentInfo
    ? <StudentDetailsEdit showEditing={show => this.setEditStudent(show)} currentStudent={this.state.currentStudent} /> 
    : <StudentDetailsDisplay showEditing={show => this.setEditStudent(show)} currentStudent={this.state.currentStudent} />;

    return (<>
      <header className='top'>
        <h2>Teacher Dashboard: View Student</h2>
        <p className='stdName'>{this.state.currentStudent.firstName}&nbsp;{this.state.currentStudent.lastName}</p>
      </header>
      <section className='basicInfo'>
        <div className=''>
          {studentInfoSection}
        </div>
      </section>

      <div className='newLesson'><h4>Create new lesson notes</h4></div>

      <NoteViewOptions />
    </>
    );
  }
}

export default TeacherViewStudent;