import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (<>
      <header className='top'>
      <h1>Feedback Tracker Welcome</h1>
    </header>
    <main>
      <Link to='/teacher'>
        <div className='tempGoTo'>Go to teacher dashboard</div>
      </Link>
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