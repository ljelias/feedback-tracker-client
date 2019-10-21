import React, { Component } from 'react';
import './NoteViewOptions.css';
import LessonNotesList from '../LessonNotesList/LessonNotesList';
import ViewNotesByTopic from '../ViewNotesByTopic/ViewNotesByTopic';

class NoteViewOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: [],
      error: null
    };
  }

  /*
  fetchStudentTopics = () => {
    let id = this.props.studentId;
    console.log(id);
    let options = {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    };
    fetch(`http://localhost:8000/api/topics/${id}`, options)
      .then(response => {
        if(!response.ok) {
          console.log('Error.');
          throw new Error('Something went wrong');
        }       
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({studentTopics: data});
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }
*/
  
  handleGetStudentSessions = () => {
    let id = this.props.studentId;
    let options = {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    };
    fetch(`http://localhost:8000/api/sessions/student/${id}`, options)
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
    })
    .catch(err => console.log('Error with request'))
  }


  render() {
      console.log(this.props.studentTopics);
      let topicOptions = this.props.studentTopics.map((topic, i) =>
        <option key={i}>{topic.topic_name}</option>
        )

    return (
      <section className='showLessonSummaries'>

        <div className='viewOptions'>
          <div className='viewByDate'>
            <h4 className='optionTitle'>View notes by date</h4>
            <button onClick={() => {this.handleGetStudentSessions()}} >Show lesson dates</button>
          </div>      
          <div className='chooseTopic'>
            <h4 className='optionTitle'>View notes by topic</h4>
            <select>
              ${topicOptions}
            </select>
          </div>
        </div>

      <LessonNotesList listData={this.state.displayList}/>
      <ViewNotesByTopic />

      </section>

    );
  }
}

export default NoteViewOptions;





