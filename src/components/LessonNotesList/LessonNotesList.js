import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LessonNotesList.css';

class LessonNotesList extends Component {

  render() {

    const sessions = this.props.listData;
    const allSessions = sessions.map(session => 
      <div className='lessonItem' key={session.id}>
        <Link to={`/lessons/${session.id}`}>
          <h3 className='sessionTitle'>Lesson notes for {session.lesson_date}</h3>
        </Link>
      </div>
    )

    return (
      <div className='lessonsByDate'>
        {allSessions}
      </div>
    );
  }
}

export default LessonNotesList;
