import React, { Component } from 'react';
import config from '../../config.js';
import './NoteViewOptions.css';
import LessonNotesList from '../LessonNotesList/LessonNotesList';
import ViewNotesByTopic from '../ViewNotesByTopic/ViewNotesByTopic';

class NoteViewOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: [],
      chosenTopic: '',
      topicFetchResults: [],
      showDates: false,
      showTopic: false,
      error: null
    };
  }
  
  handleGetStudentSessions = () => {
    let id = this.props.studentId;
    let options = {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    };
    fetch(`${config.API_BASE_URL}/sessions/student/${id}`, options)
    .then(response => {
      if(!response.ok) {
        console.log('Error.');
        throw new Error('Something went wrong'); //throw an error
      }       
      return response;
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ displayList: data }); 
      this.setState({ showDates: true });  
      this.setState({ showTopic: false});
    })
    .catch(err => console.log('Error with request'))
  }

  getOptionValue = (e) => {
    e.preventDefault();
    let selection = e.target.value;
    this.setState({chosenTopic: selection}); 
    this.handleGetTopic(selection)
  }
  handleGetTopic = (selection) => {
    fetch(`${config.API_BASE_URL}/topics/${selection}/${this.props.studentId}`)
      .then(response => {
        if(!response.ok) {
          console.log('Error.');
          throw new Error('Something went wrong');
        }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ topicFetchResults: data });
        this.setState({ showTopic: true });
        this.setState({ showDates: false });  
  
      })
      .catch(err => {
        this.setState({ error: err.message });
      });

  }

  render() {
    let topicOptions = this.props.studentTopics.map((topic, i) =>
      <option key={i} value={topic.topic_name}>{topic.topic_name}</option>
      )

    const lessonDatesSection = this.state.showDates ? <LessonNotesList listData={this.state.displayList}/> : '';
    const lessonTopicSection = this.state.showTopic ? <ViewNotesByTopic topicResults={this.state.topicFetchResults} topic={this.state.chosenTopic} id={this.props.studentId} /> : '';

    return (
      <section className='showLessonSummaries'>

        <div className='viewOptions'>
          <div className='viewByDate'>
            <h4 className='optionTitle'>View notes by date</h4>
            <button onClick={() => {this.handleGetStudentSessions()}} >Show lesson dates</button>
          </div>      
          <div className='chooseTopic'>
            <h4 className='optionTitle'>View notes by topic</h4>
            <select defaultValue={'DEFAULT'} onChange={e => {this.getOptionValue(e)}}>
              <option value="DEFAULT" disabled>Choose a topic</option>
              ${topicOptions}
            </select>
          </div>
        </div>
      {lessonDatesSection}
      {lessonTopicSection}
      </section>

    );
  }
}

export default NoteViewOptions;




