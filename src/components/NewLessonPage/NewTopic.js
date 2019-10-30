import React, { Component } from 'react';
import './NewTopic.css';

class NewTopic extends Component {

  
  getOptionOther = (e)=> {
    e.preventDefault();
    let choiceA = e.target.value;

    if (choiceA === 'Other') { document.getElementById("divA").style.display = 'block'; } 
    else { document.getElementById("divA").style.display = 'none'; }
  }

  render() {
  
    let topicOptions = this.props.studentTopics.map((topic, i) =>
    <option key={i} value={topic.topic_name}>{topic.topic_name}</option>);

    return (
      <div id='topicsArea'>

        <div className='newTopicArea'>
          <select name='optionA'  defaultValue={'DEFAULT'} onChange={e => {this.getOptionOther(e)}}>
            <option value='DEFAULT' disabled>Choose a topic</option>
            ${topicOptions}
            <option name='optionA' value='Other'>Other</option>
          </select>
          <div id='divA' style={{display:'none'}}>
            <label>Other topic: <input name='optionA2' className='otherBox'></input></label>
          </div>
          <textarea name='infoA' rows='4' className='anotherNotesField'></textarea>
        </div>



      </div>
    );
  }
} 

export default NewTopic;

