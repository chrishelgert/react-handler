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
  checkedProperty,
  EmptyComponent,
  children,
}) => (
  <ErrorHandler message={errorMessage} ErrorComponent={ErrorComponent}>
    <EmptyHandler
      message={emptyMessage}
      checkedProperty={checkedProperty}
      EmptyComponent={EmptyComponent}
    >
      {children}
    </EmptyHandler>
  </ErrorHandler>
);

ErrorEmptyHandler.propTypes = {
  ErrorComponent: PropTypes.func,
  EmptyComponent: PropTypes.func,
  errorMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  checkedProperty: PropTypes.any,
  children: PropTypes.node,
};

export default ErrorEmptyHandler;
