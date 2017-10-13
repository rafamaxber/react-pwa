import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Default';

describe('Product', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Product></Product>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});