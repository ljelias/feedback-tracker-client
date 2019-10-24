import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TeacherViewStudent from './TeacherViewStudent.js';


describe('TeacherViewStudent component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TeacherViewStudent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<TeacherViewStudent />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});