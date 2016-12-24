import React, { PropTypes } from 'react';
import renderer from 'react-test-renderer';
import EmptyHandler from '../../src/components/EmptyHandler';

const TestComponent = () => <h1>Test</h1>;
const EmptyComponent = ({ children }) => <h2 className="empty">{children}</h2>;
EmptyComponent.propTypes = { children: PropTypes.string };
const emptyPropertyKey = 'list';
const componentPropsFilled = { list: ['abc', 'def'] };
const componentPropsEmpty = { list: [] };
const emptyMsg = 'no results found';

describe('EmptyHandler', () => {
  it('should return the component when called without emptyPropertyKey', () => {
    const tree = renderer.create(
      <EmptyHandler
        Component={TestComponent}
        componentProps={componentPropsFilled}
        emptyMsg={emptyMsg}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the component when the element in componentProps is not empty', () => {
    const tree = renderer.create(
      <EmptyHandler
        Component={TestComponent}
        componentProps={componentPropsFilled}
        emptyPropertyKey={emptyPropertyKey}
        emptyMsg={emptyMsg}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the EmptyComponent, when the list is empty and called with EmptyComponent', () => {
    const tree = renderer.create(
      <EmptyHandler
        Component={TestComponent}
        EmptyComponent={EmptyComponent}
        componentProps={componentPropsEmpty}
        emptyPropertyKey={emptyPropertyKey}
        emptyMsg={emptyMsg}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the EmptyMessage, when the list is empty', () => {
    const tree = renderer.create(
      <EmptyHandler
        Component={TestComponent}
        componentProps={componentPropsEmpty}
        emptyPropertyKey={emptyPropertyKey}
        emptyMsg={emptyMsg}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
