import React, { Component } from 'react';
import './StudentDetailsEdit.css';

class StudentDetailsEdit extends Component {

  getFormValues = (e) => {
    e.preventDefault();
    let updatedStudent = {
      first_name: e.target.stdFName.value,
      last_name: e.target.stdLName.value,
      phone: e.target.stdPhone.value,
      email: e.target.stdEmail.value,
      misc_info: e.target.stdInfo.value 
    }
    let id = this.props.currentStudent.id;
    this.props.showEditing(false);
    this.handlePatchStudentData(updatedStudent, id);
  }

  handlePatchStudentData = (updatedStudent, id) => {
    let options = {
      method: 'PATCH',
      body: JSON.stringify(updatedStudent),
      headers: { "Content-Type": "application/json" }
    };
    fetch(`http://localhost:8000/api/students/${id}`, options)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong'); //throw an error
      }       
      return response;
    })
    .then(response => response.json())
    .then((updatedStudent) => this.props.resetStudent(updatedStudent))
    .catch(err => console.log('Error with request'))
  }


  render() {
    const student = this.props.currentStudent;
    
    return (
      <form className='studentDetailsEditor' onSubmit = {e => {this.getFormValues(e)}}>
        <button type='submit' className='updateStudent'>Save</button>
        <button type='' className='cancelUpdate'
         onClick={() => this.props.showEditing(false)}
          >Cancel</button>

        <input className="editingStudent" type="text" name='stdFName' defaultValue={student.first_name} />
        <input className="editingStudent" type="text" name='stdLName' defaultValue={student.last_name} />
        <input className="editingStudent" type="text" name='stdPhone' defaultValue={student.phone} />
        <input className="editingStudent" type="text" name='stdEmail' defaultValue={student.email} />
        <textarea className="editingStudent" type="text" rows='4' name='stdInfo' defaultValue={student.misc_info}></textarea>
      </form>
    );
  }
}

export default StudentDetailsEdit;