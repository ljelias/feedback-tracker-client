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
    this.handlePostNewStudent(newStudent);
  }

  handlePostNewStudent = (newStudent) => {
    //const {API_BASE_URL} = require('../../config.js');

    let options = {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: { "Content-Type": "application/json" }
    };
    fetch(`http://localhost:8000/api/students`, options)
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
            <h3 className='newStdHeader'><span className='italicspan'>Add new student </span><span className='arrowpointers'> &#9652;</span></h3>
          </header>   
          <form onSubmit = {e => {this.getFormValues(e)}}>
              <button type='submit' className='saveStd'>Save</button>
              <label htmlFor='newStdFname' className='labeler'>First&nbsp;Name:&#160; <br/>
                <input type='text' id='newStdFname'  name='newStdFname' className='smBox' placeholder='Student first name' required />
              </label><br/>
              <label htmlFor='newStdLname' className='labeler'>Last&nbsp;Name:&#160;<br/>
                <input type='text' id='newStdLname' name='newStdLname' className='smBox' placeholder='Student last name' required />
              </label><br/>
              <label htmlFor='newStdPhone' className='labeler'>Phone:&#160;<br/> 
                <input type='text' id='newStdPhone' name='newStdPhone' className='smBox' placeholder='Phone number' />
              </label><br/>
              <label htmlFor='newStdEmail' className='labeler'>Email:&#160;<br/>
                <input type='text' id='newStdEmail' name='newStdEmail' className='smBox' placeholder='Email address' />
              </label><br/>
              <label htmlFor='newStdInfo' className='labeler'>Other&nbsp;info:&#160;<br/>
                <textarea cols='4' maxLength='480' id='newStdInfo' className='vertAlignBottom' name='newStdInfo' placeholder='Misc notes'></textarea>
              </label>
          </form>
      </div>
  
    );
  }
}

export default NewStudentForm;
