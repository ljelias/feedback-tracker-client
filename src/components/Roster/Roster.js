import React, { Component } from 'react';
import './Roster.css';

class Roster extends Component {
  render() {
    return (
      <section className='showRoster'>
        <div className='rosterItem'><h3>StudentA</h3></div>
        <div className='rosterItem'><h3>StudentB</h3></div>
        <div className='rosterItem'><h3>StudentC</h3></div>
      </section>
    );
  }
}

export default Roster;


