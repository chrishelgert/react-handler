import React, { PropTypes } from 'react';
import renderer from 'react-test-renderer';
import ErrorHandler from '../../src/components/ErrorHandler';

const TestComponent = () => <h1>Test</h1>;
const ErrorComponent = ({ children }) => <h2 className="error">{children}</h2>;
ErrorComponent.propTypes = { children: PropTypes.string };
const errorMsg = 'failed to call api';

describe('ErrorHandler', () => {
  it('should return the component when called without errorMsg', () => {
    const tree = renderer.create(
      <ErrorHandler Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return null when called without errorMsg and component', () => {
    const tree = renderer.create(<ErrorHandler />);
    expect(tree).toMatchSnapshot();
  });

  it('should return the ErrorComponent', () => {
    const tree = renderer.create(
      <ErrorHandler
        ErrorComponent={ErrorComponent}
        errorMsg={errorMsg}
        Component={TestComponent}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the ErrorMessage when called without ErrorComponent', () => {
    const tree = renderer.create(
      <ErrorHandler errorMsg={errorMsg} Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
