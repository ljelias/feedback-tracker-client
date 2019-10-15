import React, { Component } from 'react';
import './TeacherViewStudent.css';
import NoteViewOptions from '../NoteViewOptions/NoteViewOptions';
import StudentDetailsDisplay from '../StudentDetails/StudentDetailsDisplay';
import StudentDetailsEdit from '../StudentDetails/StudentDetailsEdit';

class TeacherViewStudent extends Component {
  render() {
    return (<>
      <header className='top'>
        <h2>Teacher Dashboard: View Student A</h2>
      </header>
      <section className='basicInfo'>
        <div className=''>
          if (!student.editing)
          <StudentDetailsDisplay />
          if (student.editing)
          <StudentDetailsEdit />
        </div>
      </section>

      <div className='newLesson'><h4>Create new lesson notes</h4></div>

      <NoteViewOptions />
    </>
    );
  }
}

export default TeacherViewStudent;