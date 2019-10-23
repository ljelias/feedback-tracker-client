import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (<>
      <header className='landingPageTop'>
      <h1>Feedback Tracker</h1>
    </header>
    <main>
      <Link to='/teacher'>
        <div className='tempGoTo'><p className='tempP'>Go to teacher dashboard</p></div>
      </Link>
      <section className='appInfo'>
        <div className='appInfo'>
          <h2 className='trackerAbout'>Manage your student feedback!</h2>
          <p className='appInfoP'>This app is for instructors, tutors, coaches or trainers.</p>
          <p className='appInfoP'>The app lets you organize notes by category, and then later easily view notes based on a particular topic, issue, or benchmark.</p>
          <p className='appInfoP'>The app also works well for instructors who use a rubric for grading student projects.</p>
        </div>
      </section>
    </main>
  </>
    );
  }
}

export default LandingPage;

/*
      <div className='loginForm'><em>(Future login box)</em></div>
*/