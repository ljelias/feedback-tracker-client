import React, { Component } from 'react';
import './NewStudentFormOpener.css';

class NewStudentFormOpener extends Component {
  render() {
    return ( <div className='addNewStd'>
      <header className='addStudentFormHeader' onClick={e => this.props.showForm(true)} >
        <h3><span className='italicspan'>Click to add a new student </span><span className='arrowpointers'> &#9662;</span></h3>
      </header>
    </div>);
  }
}

export default NewStudentFormOpener;