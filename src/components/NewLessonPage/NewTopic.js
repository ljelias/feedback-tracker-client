import React, { Component } from 'react';
import './NewTopic.css';

class NewTopic extends Component {

  getOptionValue = (e) => {
    e.preventDefault();
    let selection = e.target.value;
    console.log(selection);
    if (selection === 'Other') { document.getElementById("other-div").style.display = 'block'; } 
    else { document.getElementById("other-div").style.display = 'none'; }
    }

  render() {
    console.log(this.props.studentTopics);
    let topicOptions = this.props.studentTopics.map((topic, i) =>
      <option key={i} value={topic.topic_name}>{topic.topic_name}</option>
      )
  
    return (
      <div className='topicsArea'>
      <button className='addNewTopic'><span className='plus'> + </span>Topic</button>

        <div className='newTopic'>
          <select defaultValue={'DEFAULT'} onChange={e => {this.getOptionValue(e)}}>
            <option value="DEFAULT" disabled>Choose a topic</option>
            {topicOptions}
            <option value="Other">Other</option>
          </select>
          <div id="other-div" style={{display:'none'}}>
            <label>Other topic: <input id="other-input" name='other'></input></label>
          </div>
          <textarea className='notesField'></textarea>    
        </div>

      </div>
    );
  }
} 

export default NewTopic;
/*


    function check(elem) {
      if (elem.value == 'Other') {
            document.getElementById("other-div").style.display = 'block';
        } else {
            document.getElementById("other-div").style.display = 'none';
        }
    }


*/
