import React, { PropTypes } from 'react';

/**
 * This Mini-Handler handles only the error-state
 * or display the given Component.
 */
const ErrorHandler = ({ message, ErrorComponent, Component, componentProps = {} }) => {
  if (message) {
    if (ErrorComponent) {
      return <ErrorComponent>{message}</ErrorComponent>;
    }

    return <div className="handler--error">{message}</div>;
  }

  if (Component) {
    return <Component {...componentProps} />;
  }

  return null;
};

ErrorHandler.propTypes = {
  message: PropTypes.string,
  ErrorComponent: PropTypes.func,
  Component: PropTypes.func,
  componentProps: PropTypes.object,
};

export default ErrorHandler;
