import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Roster from './Roster.js';


describe('Roster component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Roster />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer.create(<Roster />).toJSON();
    expect(tree).toMatchSnapshot();  
  });


});