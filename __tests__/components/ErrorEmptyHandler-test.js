import React from 'react';
import renderer from 'react-test-renderer';
import ErrorEmptyHandler from '../../src/components/ErrorEmptyHandler';

const Component = () => <div>Test</div>;

describe('ErrorEmptyHandler', () => {
  it('should display the error-message', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler
        Component={Component}
        errorMessage="failed to load articles"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the empty-message', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler
        Component={Component}
        componentProps={{}}
        emptyPropertyKey="articles"
        emptyMessage="0 Articles found"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the Component', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler Component={Component} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
