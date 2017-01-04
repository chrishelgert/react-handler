import React, { PropTypes } from 'react';
import EmptyHandler from './EmptyHandler';
import ErrorHandler from './ErrorHandler';

/**
 * This Sub-Handler combines the Error and Empty-Handler
 */
const ErrorEmptyHandler = ({
  errorMessage,
  ErrorComponent,
  emptyMessage = '',
  emptyPropertyKey,
  EmptyComponent,
  componentProps = {},
  Component,
}) => (
  <ErrorHandler
    message={errorMessage}
    ErrorComponent={ErrorComponent}
    Component={() => (
      <EmptyHandler
        message={emptyMessage}
        emptyPropertyKey={emptyPropertyKey}
        EmptyComponent={EmptyComponent}
        componentProps={componentProps}
        Component={Component}
      />
    )}
  />
);

ErrorEmptyHandler.propTypes = {
  ErrorComponent: PropTypes.func,
  EmptyComponent: PropTypes.func,
  Component: PropTypes.func,
  errorMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptyPropertyKey: PropTypes.string,
  componentProps: PropTypes.object,
};

export default ErrorEmptyHandler;
