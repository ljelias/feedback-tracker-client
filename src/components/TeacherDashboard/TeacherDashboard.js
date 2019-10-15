import React, { Component } from 'react';
import './TeacherDashboard.css';
import NewStudentForm from '../NewStudentForm/NewStudentForm.js';
import Roster from '../Roster/Roster.js'

class TeacherDashboard extends Component {
  render() {
    return (
      <div>
        <header className='top'>
          <h2>Teacher Dashboard: My students</h2>
        </header>
        <main>
          <section className='addStudent'>
            <div className='addNewStd'>
              <header className='addStudentFormHeader'>
                <h3><span className='italicspan'>Click to add a new student </span><span class='arrowpointers'> &#9662;</span></h3>
              </header>   
            </div>

            <NewStudentForm />
          </section>
          <section className="showStudentList">
            <Roster />
          </section>  
        </main>
      </div>
    );
  }
}

export default TeacherDashboard;

/*

{this.state.showForm && <NewStudentForm /> }
*/