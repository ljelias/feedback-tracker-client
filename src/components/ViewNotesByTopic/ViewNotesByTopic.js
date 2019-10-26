import React, { Component } from 'react';
import './ViewNotesByTopic.css';

class ViewNotesByTopic extends Component {

  convertDate2 = (itemDate) => {
    let rawDate = new Date(itemDate);
    let arr = rawDate.toString().split(' ');
    let dateString = arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3];
    return dateString;
  }

  render() {
    let items = this.props.topicResults;

    let topicList = items.map((item, i) => 
      <div className='topicItem' key={item.lesson_id}>
        <h5 className='topicItemTitle'>From lesson: {this.convertDate2(item.lesson_date)}</h5>
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
