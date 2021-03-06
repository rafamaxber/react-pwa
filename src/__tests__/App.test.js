import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <App></App>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});