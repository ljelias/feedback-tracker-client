import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  render() {
    return (
        <div className='addNewStd'>
          <header className='addStudentFormHeader'>
            <h3><span className='italicspan'>Add a new student </span><span class='arrowpointers'> &#9652;</span></h3>
          </header>   
          <form>
              <button type='submit' className='saveStd'>Save</button>
              <label for='newStdFname' className='labeler'>First Name:&nbsp; 
                <input type='text' id='newStdFname'  name='newStdFname' placeholder='Student first name' required />
              </label>
              <label for='newStdLname' className='labeler'>Last Name:&nbsp;
                <input type='text' id='newStdLname' name='newStdLname' placeholder='Student last name' required />
              </label>
              <label for='newStdPhone' className='labeler'>Phone:&nbsp;
                <input type='text' id='newStdPhone' name='newStdPhone' placeholder='Phone number' />
              </label>
              <label for='newStdEmail' className='labeler'>Email:&nbsp;
                <input type='text' id='newStdEmail' name='newStdEmail' placeholder='Email address' />
              </label>
              <label for='newStdInfo' className='labeler'>Other info:&nbsp;
                <textarea cols='4' maxlength='480' id='newStdInfo' class='vertAlignBottom' name='newStdInfo' placeholder='Misc notes'></textarea>
              </label>
          </form>
      </div>
  
    );
  }
}

export default NewStudentForm;

/*
<div className='addNewStdA'>
  <header className='toggleShowHide'>
    <h3><span id='addingTitle' className='italicspan'>Click to add a new student </span><span class='arrowpointers'> &#9662;</span></h3>
  </header>   
</div>
*/