import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NoteViewOptions from './NoteViewOptions.js';


describe('NoteViewOptions component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NoteViewOptions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<NoteViewOptions />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});
