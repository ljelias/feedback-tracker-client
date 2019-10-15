import React, { Component } from 'react';
import './StudentDetailsDisplay.css';

class StudentDetailsDisplay extends Component {
  render() {
    return (
      <div className='studentDetails'>
        <button type='submit' className='editStudent'>Edit</button>
        <p>First Name:&nbsp;student.firstName}</p>
        <p>Last Name:&nbsp;student.lastName}</p>
        <p>Phone:&nbsp;student.phone}</p>
        <p>Email:&nbsp;student.email}</p>
        <p>Other info:&nbsp;student.otherInfo}</p>
      </div>
    );
  }
}

export default StudentDetailsDisplay;
