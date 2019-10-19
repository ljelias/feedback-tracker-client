import React, { Component } from 'react';
import './StudentDetailsEdit.css';

class StudentDetailsEdit extends Component {
  render() {
    const student = this.props.currentStudent;

    return (
      <form className='studentDetailsEditor'>
        <button type='submit' className='updateStudent'
          onClick={e => this.props.showEditing(false)}>Save</button>
        <input className="editingStudent" type="text" defaultValue={student.firstName} />
        <input className="editingStudent" type="text" defaultValue={student.lastName} />
        <input className="editingStudent" type="text" defaultValue={student.phone} />
        <input className="editingStudent" type="text" defaultValue={student.email} />
        <textarea className="editingStudent" type="text" rows='3' defaultValue={student.miscInfo}></textarea>
      </form>
    );
  }
}

export default StudentDetailsEdit;