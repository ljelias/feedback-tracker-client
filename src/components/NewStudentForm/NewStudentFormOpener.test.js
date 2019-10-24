import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewStudentFormOpener from './NewStudentFormOpener.js';


describe('NewStudentFormOpener component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewStudentFormOpener />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<NewStudentFormOpener />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});