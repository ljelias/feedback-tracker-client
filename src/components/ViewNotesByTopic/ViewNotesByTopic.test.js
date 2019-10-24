import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ViewNotesByTopic from './ViewNotesByTopic.js';


describe('ViewNotesByTopic component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ViewNotesByTopic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ViewNotesByTopic />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});