import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import NewStudentForm from './NewStudentForm.js';


describe('NewStudentForm component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewStudentForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<NewStudentForm />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});
