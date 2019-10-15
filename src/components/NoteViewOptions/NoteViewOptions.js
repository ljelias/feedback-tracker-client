import React, { Component } from 'react';
import './NoteViewOptions.css';
import LessonNotesList from '../LessonNotesList/LessonNotesList';
import ViewNotesByTopic from '../ViewNotesByTopic/ViewNotesByTopic';

class NoteViewOptions extends Component {
  render() {
    return (
      <section className='showLessonSummaries'>

        <div className='viewOptions'>
          <div className='viewByDate'>
            <h4>View notes by date</h4>
            <button >View by lesson date</button>
          </div>      
          <div className='chooseTopic'>
            <h4>View notes by topic</h4>
            <select>
              <option>vowels</option>
              <option>stress</option>
            </select>
          </div>
        </div>

      <LessonNotesList />
      <ViewNotesByTopic />

      </section>

    );
  }
}

export default NoteViewOptions;





