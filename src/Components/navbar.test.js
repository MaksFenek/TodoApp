import React from 'react';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';

describe('Navbar', () => {
  it('should render corrently', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
