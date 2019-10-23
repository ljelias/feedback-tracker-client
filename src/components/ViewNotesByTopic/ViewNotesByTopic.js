import React, { Component } from 'react';
import './ViewNotesByTopic.css';

class ViewNotesByTopic extends Component {


  render() {
    let items = this.props.topicResults;
    let topicList = items.map((item, i) => 
      <div className='topicItem' key={item.lesson_id}>
        <h5 className='topicItemTitle'>From lesson: {item.lesson_date}</h5>
        <p className='topicItemP'>{item.topic_content}</p>
      </div>
      );

    return (
      <div className='lessonsByTopic'>
        <h3 className='topicBanner'>Notes for Topic: <span className='topicName'> {this.props.topic}</span></h3>
        {topicList}
      </div>
    );
  }
}

export default ViewNotesByTopic;
