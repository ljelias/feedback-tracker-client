import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SingleLessonView from './SingleLessonView.js';


describe('SingleLessonView component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SingleLessonView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<SingleLessonView />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});