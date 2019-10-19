import React, { Component } from 'react';
import './TeacherDashboard.css';
import NewStudentForm from '../NewStudentForm/NewStudentForm.js';
import Roster from '../Roster/Roster.js'
import NewStudentFormOpener from '../NewStudentForm/NewStudentFormOpener';
//import { thisExpression } from '@babel/types';

class TeacherDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      showAddForm: false,
      error: null
    };
  }

  setShowAddForm(show) { 
    this.setState({ showAddForm: show });
  }
  addStudent(newStudent) {
    this.setState({
      roster: [...this.state.roster, newStudent],
      showAddForm: false
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
    const addStdSection = this.state.showAddForm
      ? <NewStudentForm showForm={show => this.setShowAddForm(show)} addStudent={(student) => this.addStudent(student)}/> 
      : <NewStudentFormOpener showForm={show => this.setShowAddForm(show)} />;
    return (
      <div>
        <header className='top'>
          <h2>Teacher Dashboard: My students</h2>
        </header>
        <main>
          <section className='addStudent'>
            {addStdSection}
          </section>
          <section className="showStudentList">
            <Roster students={this.state.roster} />
          </section>  
        </main>
      </div>
    );
  }
}

export default TeacherDashboard;

