import React, { Component } from 'react';
import './StudentDetailsDisplay.css';

class StudentDetailsDisplay extends Component {
  render() {
    const student = this.props.currentStudent;
    console.log(student);

    return (
      <div className='studentDetails'>
        <button type='submit' className='editStudent'
          onClick={e => this.props.showEditing(true)}>Edit
        </button>
        <p className='parag'>First Name:&nbsp;<span className='details'>{student.firstName}</span></p>
        <p className='parag'>Last Name:&nbsp;<span className='details'>{student.lastName}</span></p>
        <p className='parag'>Phone:&nbsp;<span className='details'>{student.phone}</span></p>
        <p className='parag'>Email:&nbsp;<span className='details'>{student.email}</span></p>
        <p className='parag'>Other info:&nbsp;<span className='details'>{student.miscInfo}</span></p>
      </div>
    );
  }
}

export default StudentDetailsDisplay;
