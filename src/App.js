import React from 'react';
//import { Route } from 'react-router-dom';
import './App.css';
import './components/NewStudentForm/NewStudentForm.js';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import TeacherViewStudent from './components/TeacherViewStudent/TeacherViewStudent.js';
import StudentDashboard from './components/StudentViews/StudentDashboard';
import NewLessonPage from './components/NewLessonPage/NewLessonPage';
import SingleLessonView from './components/SingleLessonView/SingleLessonView';


function App() {
  return (
    <main className='App'>
      <LandingPage />
      <TeacherDashboard />
      <TeacherViewStudent />
      <StudentDashboard />
      <NewLessonPage />
      <SingleLessonView />
    </main>
  );
}

export default App;

/*
      <Route path='/' component={LandingPage} />
      <Route path='/teacher' component={TeacherDashboard} />
      <Route path='/teacher/:student' component={TeacherViewStudent} />
      <Route path='/student/:student' component={StudentDashboard} />
      <Route path='/lesson' component={NewLessonPage} />
      <Route path='/lesson/:lesson' component={SingleLessonView} />
*/

