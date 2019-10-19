import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {

  getFormValues = (e) => {
    e.preventDefault();
    let newStudent = {
      first_name: e.target.newStdFname.value,
      last_name: e.target.newStdLname.value,
      phone: e.target.newStdPhone.value,
      email: e.target.newStdEmail.value,
      misc_info: e.target.newStdInfo.value 
    }
    console.log(newStudent);
    this.handlePostNewStudent(newStudent);
  }

  handlePostNewStudent = (newStudent) => {
    let options = {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: { "Content-Type": "application/json" }
    };
    fetch('http://localhost:8000/api/students', options)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong'); //throw an error
      }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.props.addStudent(data);
    })
    .catch(err => console.log('Error with request'))
  }


  render() {
    return (
        <div className='addNewStd'>
          <header className='addStudentFormHeader'  onClick={e => this.props.showForm(false)} >
            <h3><span className='italicspan'>Add a new student </span><span className='arrowpointers'> &#9652;</span></h3>
          </header>   
          <form onSubmit = {e => {this.getFormValues(e)}}>
              <button type='submit' className='saveStd'>Save</button>
              <label htmlFor='newStdFname' className='labeler'>First Name:&nbsp; 
                <input type='text' id='newStdFname'  name='newStdFname' placeholder='Student first name' required />
              </label>
              <label htmlFor='newStdLname' className='labeler'>Last Name:&nbsp;
                <input type='text' id='newStdLname' name='newStdLname' placeholder='Student last name' required />
              </label>
              <label htmlFor='newStdPhone' className='labeler'>Phone:&nbsp;
                <input type='text' id='newStdPhone' name='newStdPhone' placeholder='Phone number' />
              </label>
              <label htmlFor='newStdEmail' className='labeler'>Email:&nbsp;
                <input type='text' id='newStdEmail' name='newStdEmail' placeholder='Email address' />
              </label>
              <label htmlFor='newStdInfo' className='labeler'>Other info:&nbsp;
                <textarea cols='4' maxLength='480' id='newStdInfo' className='vertAlignBottom' name='newStdInfo' placeholder='Misc notes'></textarea>
              </label>
          </form>
      </div>
  
    );
  }
}

export default NewStudentForm;
