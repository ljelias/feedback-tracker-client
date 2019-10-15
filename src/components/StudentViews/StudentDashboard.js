import React, { Component } from 'react';
import './StudentDashboard.css';
import NoteViewOptions from '../NoteViewOptions/NoteViewOptions';

class StudentDashboard extends Component {
  render() {
    return (<>
      <header class='top'>
        <h2>Student Dashboard: My lessons</h2>
      </header>
      <section class='teacherInfo'>
            <div class='teacherDetails'>
              <h3>My instructor</h3>
              <p>First Name:&nbsp;teacher.firstName}</p>
              <p>Last Name:&nbsp;teacher.lastName}</p>
              <p>Phone:&nbsp;teacher.phone}</p>
              <p>Email:&nbsp;teacher.email}</p>
            </div>
        </section>

      <NoteViewOptions />
    </>
    );
  }
}

export default StudentDashboard;