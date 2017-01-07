import React from 'react';
import renderer from 'react-test-renderer';
import ErrorEmptyHandler from '../../src/components/ErrorEmptyHandler';

const Component = () => <div>Test</div>;
const checkedProperty = ['test'];

describe('ErrorEmptyHandler', () => {
  it('should display the error-message', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler errorMessage="failed to load articles">
        <Component />
      </ErrorEmptyHandler>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the empty-message', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler
        checkedProperty={{}}
        emptyPropertyKey="articles"
        emptyMessage="0 Articles found"
      >
        <Component />
      </ErrorEmptyHandler>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the Component', () => {
    const tree = renderer.create(
      <ErrorEmptyHandler checkedProperty={checkedProperty}>
        <Component />
      </ErrorEmptyHandler>,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
