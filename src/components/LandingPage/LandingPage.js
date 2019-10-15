import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (<>
      <header className='top'>
      <h1>Feedback Tracker Welcome</h1>
    </header>
    <main>
      <div className='tempGoTo'>Go to teacher dashboard</div>
      <section className='appInfo'>
        <div className='appInfo'>
          <h2>About this app</h2>
          <p>About this app, this and that, etc.</p>
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