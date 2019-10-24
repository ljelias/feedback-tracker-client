import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StudentDetailsEdit from './StudentDetailsEdit.js';


describe('StudentDetailsEdit component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StudentDetailsEdit />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StudentDetailsEdit />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });


});