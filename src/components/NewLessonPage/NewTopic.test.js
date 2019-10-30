import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewTopic from './NewTopic.js';


describe('NewTopic component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewTopic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<NewTopic />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});