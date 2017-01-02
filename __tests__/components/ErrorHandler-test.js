import React, { PropTypes } from 'react';
import renderer from 'react-test-renderer';
import ErrorHandler from '../../src/components/ErrorHandler';

const TestComponent = () => <h1>Test</h1>;
const ErrorComponent = ({ children }) => <h2 className="error">{children}</h2>;
ErrorComponent.propTypes = { children: PropTypes.string };
const errorMessage = 'failed to call api';

describe('ErrorHandler', () => {
  it('should return the component when called without errorMessage', () => {
    const tree = renderer.create(
      <ErrorHandler Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return null when called without errorMessage and component', () => {
    const tree = renderer.create(<ErrorHandler />);
    expect(tree).toMatchSnapshot();
  });

  it('should return the ErrorComponent', () => {
    const tree = renderer.create(
      <ErrorHandler
        ErrorComponent={ErrorComponent}
        message={errorMessage}
        Component={TestComponent}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the ErrorMessage when called without ErrorComponent', () => {
    const tree = renderer.create(
      <ErrorHandler message={errorMessage} Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
