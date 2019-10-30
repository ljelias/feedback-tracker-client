import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewLessonPage from './NewLessonPage.js';


describe('NewLessonPage component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewLessonPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<NewLessonPage />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});