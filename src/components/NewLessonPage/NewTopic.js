import React, { Component } from 'react';
import './NewTopic.css';

class NewTopic extends Component {

  
  getOptionOther = (e)=> {
    e.preventDefault();
    let choiceA = e.target.value;
    //let choiceB = e.target.optionB.value;
    //let choiceC = e.target.optionC.value;

    if (choiceA === 'Other') { document.getElementById("divA").style.display = 'block'; } 
    else { document.getElementById("divA").style.display = 'none'; }
/*    
    if (choiceB === 'Other') { document.getElementById("divB").style.display = 'block'; } 
    else { document.getElementById("divB").style.display = 'none'; }
    if (choiceC === 'Other') { document.getElementById("divC").style.display = 'block'; } 
    else { document.getElementById("divC").style.display = 'none'; }
*/
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
/*
        <div className='newTopic'>
          <select name='optionB' defaultValue={'DEFAULT'} onChange={e => {this.getOptionOther(e)}}>
            <option value='DEFAULT' disabled>Choose a topic</option>
            ${topicOptions}
            <option name='optionB' value='Other'>Other</option>
          </select>
          <div id='divB' style={{display:'none'}}>
            <label  className='otherBox'>Other topic: <input id='inputB' className='otherBox'></input></label>
          </div>
          <textarea name='infoB' className='notesField'></textarea>
        </div>

        <div className='newTopic'>
          <select name='optionC' defaultValue={'DEFAULT'} onChange={e => {this.getOptionOther(e)}}>
            <option value='DEFAULT' disabled>Choose a topic</option>
            ${topicOptions}
            <option value='Other'>Other</option>
          </select>
          <div id='divC' style={{display:'none'}}>
            <label  className='otherBox'>Other topic: <input id='inputC' className='otherBox'></input></label>
          </div>
          <textarea name='infoC' className='notesField'></textarea>
        </div>


    function check(elem) {
      if (elem.value == 'Other') {
            document.getElementById("other-div").style.display = 'block';
        } else {
            document.getElementById("other-div").style.display = 'none';
        }
    }


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


THIS ALMLOST WORKS, but doesn't detect student to populate topics,
and doesn't generate the unique name and id attributes

  makeNewTopicBox = (e) => {
    e.preventDefault();

    let topicOptions = this.props.studentTopics.map((topic, i) =>
    <option key={i} value={topic.topic_name}>{topic.topic_name}</option>);

      let num = this.state.topicCount;
      let nameA = 'head'+{num};
      let nameB = 'info'+{num};
      let nameC = 'id'+{num};
      let nameD = 'div'+{num};
  
      const div = document.createElement('div');    
      div.className = 'newTopic';
    
      div.innerHTML = `
      <select name=${nameA} defaultValue={'DEFAULT'} onChange={e => {this.getOptionValue(e)}}>
      <option value='DEFAULT' disabled>Choose a topic></option>
      ${topicOptions}
      <option value='Other'>Other</option>
    </select>
    <div id=${nameD} style={{display:'none'}}>
      <label>Other topic: <input id=${nameC} name=${nameA}></input></label>
    </div><textarea name=${nameB}  className='notesField'></textarea>`;
    
    document.getElementById('topicsArea').appendChild(div);
    
    let newCount = this.state.topicCount + 1;
    this.setState({ topicCount: newCount });
    console.log(this.state.topicCount);
    }

THIS IS THE PARENT DIV IN THE final 'return'

      <div id='topicsArea'>
      <button className='addNewTopic' onClick={e => this.makeNewTopicBox(e)}>
        <span className='plus'> + </span>Topic</button>

      </div>

*/
