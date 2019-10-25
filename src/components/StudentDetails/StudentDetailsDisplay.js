import React, { Component } from 'react';
import './StudentDetailsDisplay.css';

class StudentDetailsDisplay extends Component {
  render() {
    const student = this.props.currentStudent;


    return (
      <div className='studentDetails' key={student.id}>
        <button type='submit' className='editStudent'
          onClick={e => this.props.showEditing(true)}>Edit Student Info
        </button>
        <p className='parag'>First Name:&nbsp;<span className='details'>{student.first_name}</span></p>
        <p className='parag'>Last Name:&nbsp;<span className='details'>{student.last_name}</span></p>
        <p className='parag'>Phone:&nbsp;<span className='details'>{student.phone}</span></p>
        <p className='parag'>Email:&nbsp;<span className='details'>{student.email}</span></p>
        <p className='parag'>Other info:&nbsp;<span className='details'>{student.misc_info}</span></p>
      </div>
    );
  }
}

export default StudentDetailsDisplay;
