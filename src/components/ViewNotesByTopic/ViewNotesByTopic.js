import React, { Component } from 'react';
import './ViewNotesByTopic.css';

class ViewNotesByTopic extends Component {
  render() {
    return (
      <div className='lessonsByTopic'>
        <h3 className='topicTitle'>Notes by Topic: topic_name}</h3>
        <div className='topicItem'><h5>From lesson date: lesson_date}</h5><p>lesson_content} lorem ipsum lorem ipsum lorem ipsum<br />lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></div>
        <div className='topicItem'><h5>From lesson date: lesson_date}</h5><p>lesson_content} lorem ipsum lorem ipsum lorem ipsum<br />lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></div>
        <div className='topicItem'><h5>From lesson date: lesson_date}</h5><p>lesson_content} lorem ipsum lorem ipsum lorem ipsum<br />lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></div>
      </div>
    );
  }
}

export default ViewNotesByTopic;
