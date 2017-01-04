import React from 'react';
import renderer from 'react-test-renderer';
import Handler from '../../src/components/Handler';

const Component = () => <div>Test</div>;

describe('Handler', () => {
  it('should return the loading-message and the component', () => {
    const tree = renderer.create(
      <Handler Component={Component} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should only return the loading-message, wen showComponentWhileLoading is false', () => {
    const tree = renderer.create(
      <Handler
        Component={Component}
        showComponentWhileLoading={false}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should only return the Component, when loading and showComponentWhileLoading is false', () => {
    const tree = renderer.create(
      <Handler
        Component={Component}
        showComponentWhileLoading={false}
        loading={false}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
