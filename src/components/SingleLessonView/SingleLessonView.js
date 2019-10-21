import React, { Component } from 'react';
import './SingleLessonView.css';

class SingleLessonView extends Component {
  render() {
    return (<>
      <header className='lessonTitle'>
        <h2>Lesson Summary</h2>
        <p>Student: student.name}</p>
        <p>Date:  lesson.date}</p>
        <button>Back</button>
      </header>

      <section>
        <div className='lessonTopicTitleA'>
          <header className='toggleShowHide'>
            <h3><span id='lessonTitle' className='italicspan'>View Topic: lesson.topicTitleA} </span><span className='arrowpointers'> &#9662;</span></h3>
          </header>
        </div>
        <div className='lessonTopicTitleB'>
          <header className='toggleShowHide'>
            <h3><span id='lessonTitle' className='italicspan'>Topic: lesson.topicTitleA} </span><span className='arrowpointers'> &#9652;</span></h3>
          </header>
          <div className='topicDetails'>
            <p>A bunch of stuff the teacher wrote, etc, etc, etc...</p>
            <p>And more info, paragraph and stuff</p>
          </div>
        </div>
        <div className='mockLessonTopicTitleA'>
          <header className='mockShowHide'>
            <h3><span id='lessonTitle' className='italicspan'>View Topic: lesson.topicTitleB} </span><span className='arrowpointers'> &#9662;</span></h3>
          </header>
        </div>
        <div className='mockLessonTopicTitleA'>
          <header className='mockShowHide'>
            <h3><span id='lessonTitle' className='italicspan'>View Topic: lesson.topicTitleC} </span><span className='arrowpointers'> &#9662;</span></h3>
          </header>
        </div>

      </section>

      <section className='nextSessionInfo'>
        <div className='nextSessionDetails'>
          <h4>Next Session:</h4>
          <p>Date: March 15, 2020</p>
          <p>Topics: finish article / review short vowels</p>
        </div>
      </section>
  
    </>
    );
  }
}

export default SingleLessonView;
