import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StudentDetailsDisplay from './StudentDetailsDisplay.js';


describe('StudentDetailsDisplay component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentDetailsDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StudentDetailsDisplay />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});