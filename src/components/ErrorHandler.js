import React, { PropTypes } from 'react';
import { ErrorMessage } from './Messages';

/**
 * This Mini-Handler handles only the error-state
 * or display the given Component.
 */
const ErrorHandler = ({ errorMsg, ErrorComponent, Component, componentProps = {} }) => {
  if (errorMsg) {
    if (ErrorComponent) {
      return <ErrorComponent>{errorMsg}</ErrorComponent>;
    }

    return <ErrorMessage>{errorMsg}</ErrorMessage>;
  }

  return <Component {...componentProps} />;
};

ErrorHandler.propTypes = {
  errorMsg: PropTypes.string,
  ErrorComponent: PropTypes.func,
  Component: PropTypes.func.isRequired,
  componentProps: PropTypes.object,
};

export default ErrorHandler;
