import React, { Component } from 'react';
import './StudentDetailsEdit.css';

class StudentDetailsEdit extends Component {
  render() {
    return (
      <form className='studentDetailsEditor'>
        <button type='submit' className='updateStudent'>Save</button>
        <input className="editingStudent" type="text" value="student.firstName}" />
        <input className="editingStudent" type="text" value="student.lastName}" />
        <input className="editingStudent" type="text" value="student.phone}" />
        <input className="editingStudent" type="text" value="student.email}" />
        <textarea className="editingStudent" type="text">student.otherInfo}</textarea>
      </form>
    );
  }
}

export default StudentDetailsEdit;