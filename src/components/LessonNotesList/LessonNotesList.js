import React, { Component } from 'react';
import './LessonNotesList.css';

class LessonNotesList extends Component {
  render() {
    return (
      <div className='lessonsByDate'>
        <div className='lessonItem'><h3>Lesson notes 03/01/2020</h3></div>
        <div className='lessonItem'><h3>Lesson notes 02/15/2020</h3></div>
        <div className='lessonItem'><h3>Lesson notes 02/01/2020</h3></div>
      </div>
    );
  }
}

export default LessonNotesList;
