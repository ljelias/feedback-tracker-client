import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LessonNotesList.css';


class LessonNotesList extends Component {

  convertDate3 = (itemDate) => {
    let rawDate = new Date(itemDate);
    let arr = rawDate.toString().split(' ');
    let dateString = arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3];
    return dateString;
  }

  render() {
    const sessions = this.props.listData;

    const allSessions = sessions.map(session => 
      <div className='lessonItem' key={session.id}>
        <Link to={`/lessons/${session.id}`}>
          <h3 className='sessionTitle'>Lesson notes for: <span className='italicSpan'>&#160;{this.convertDate3(session.lesson_date)}</span></h3>
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
