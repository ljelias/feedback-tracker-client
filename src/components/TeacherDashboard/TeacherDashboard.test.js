import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TeacherDashboard from './TeacherDashboard.js';


describe('TeacherDashboard component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TeacherDashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<TeacherDashboard />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});