import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LessonNotesList from './LessonNotesList.js';


describe('LessonNotesList component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LessonNotesList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<LessonNotesList />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});