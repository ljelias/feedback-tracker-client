import React, { Component } from 'react';
import './StudentDashboard.css';
//import NoteViewOptions from '../NoteViewOptions/NoteViewOptions';

class StudentDashboard extends Component {

  render() {

    //let stdId = this.props.match.params.student;

    return (<>
      <header className='stdDashTop'>
        <h2 className='stdDashTitle'>Student Dashboard: My lessons</h2>
      </header>
      <main>
        <section className='teacherInfo'>
          <div className='teacherDetails'>
            <h3 className='teacherInfoTitle'>My instructor</h3>
            <p>First Name:&nbsp;teacher.firstName}</p>
            <p>Last Name:&nbsp;teacher.lastName}</p>
            <p>Phone:&nbsp;teacher.phone}</p>
            <p>Email:&nbsp;teacher.email}</p>
          </div>
        </section>

        <section>
        </section>
      </main>
    </>
    );
  }
}

export default StudentDashboard;     

// <NoteViewOptions studentId={this.props.match.params.student} />
