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
/*
let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);
*/
