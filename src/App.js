import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage.js';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard.js';
import TeacherViewStudent from './components/TeacherViewStudent/TeacherViewStudent.js';
import NewLessonPage from './components/NewLessonPage/NewLessonPage';
import StudentDashboard from './components/StudentViews/StudentDashboard';
import SingleLessonView from './components/SingleLessonView/SingleLessonView';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }


  render() {

    return (
      <main className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/teacher' component={TeacherDashboard} />
        <Route path='/teacher/:student' component={TeacherViewStudent} />
        <Route path='/student/:student' component={StudentDashboard} />
        <Route path='/lessons' component={NewLessonPage} />
        <Route path='/lessons/:lesson' component={SingleLessonView} />
      </main>
    );
  }
}

export default App;

/*
      <LandingPage />
      <TeacherDashboard />
      <TeacherViewStudent />
      <StudentDashboard />
      <NewLessonPage />
      <SingleLessonView />
*/

