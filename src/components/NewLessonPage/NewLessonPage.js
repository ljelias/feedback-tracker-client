import React, { Component } from 'react';
import './NewLessonPage.css';

class NewLessonPage extends Component {
  render() {
    return (<>
      <header className='top'>
        <h2>New Lesson (write the notes)</h2>
      </header>
        
      <section className='lessonNotesForm'>
        <form className='sessionNotes'>
          <button className='addNewTopic'>+ New Topic</button>
  
          <label htmlFor='stdName' className='notesField'>Student:&nbsp;
            <select id='stdName'>
              <option>StudentA</option>
              <option>StudentB</option>
              <option>StudentC</option>
              <option>StudentD</option>
            </select>
          </label>
          <label htmlFor='sessionDate' className='notesField'>Date:&nbsp;
            <input type='date' id='sessionDate' name='date' />
          </label>
  
        <div className='newTopic'>
            <input type='text'  className='notesField' placeholder='topic' />
            <textarea  className='notesField'></textarea>    
        </div>
        <div className='newTopic'>
            <input type='text'  className='notesField' placeholder='topic' />
            <textarea className='notesField'></textarea>    
        </div>
  
        <button type='submit' className='saveNewNotes'>Save Lesson</button>      
  
        <label htmlFor='nextDate' className='notesField'>Next lesson:&nbsp;
          <input type='text' id='nextDate' />
        </label>
        <label htmlFor='nextTopics' className='notesField'>Topics:&nbsp;
          <input type='text' id='nextTopics' />
        </label>  
      </form>
    </section>
  </>
      );
  }
}

export default NewLessonPage;
