import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StudentDashboard from './StudentDashboard.js';


describe('StudentDashboard component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentDashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StudentDashboard />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});