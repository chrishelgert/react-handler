import React, { PropTypes } from 'react';

/**
 * This Mini-Handler handles only the error-state
 * or display the given Component.
 */
const ErrorHandler = ({ message, ErrorComponent, children }) => {
  if (message) {
    if (ErrorComponent) {
      return <ErrorComponent>{message}</ErrorComponent>;
    }

    return <div className="handler--error">{message}</div>;
  }

  return children || null;
};

ErrorHandler.propTypes = {
  message: PropTypes.string,
  ErrorComponent: PropTypes.func,
  children: PropTypes.node,
};

export default ErrorHandler;
