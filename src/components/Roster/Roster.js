import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Roster.css';

class Roster extends Component {
  static defaultProps = { students: [] };


  render() {
    const students = this.props.students;

    const allStudents = students.map(student => 
      <div className='rosterItem' key={student.id}>  
        <Link to={`/teacher/${student.id}`}>
          <h3 className='stdLink'>{student.first_name}&nbsp;{student.last_name}</h3>
        </Link>
      </div>
      )

    return (
      <section className='showRoster'>
        {allStudents}
      </section>
    );
  }
}

export default Roster;

//??? use "key" on line10 instead of "id"?


