import React, { PropTypes } from 'react';
import EmptyHandler from './EmptyHandler';
import ErrorHandler from './ErrorHandler';
import LoadingHandler from './LoadingHandler';

/**
 * The Handler handles loading, error and empty state
 * or display the given Component.
 */
const Handler = ({
  LoadingComponent,
  ErrorComponent,
  EmptyComponent,
  Component,
  loadingMessage,
  errorMessage,
  emptyMessage = '',
  emptyPropertyKey,
  componentProps = {},
  loading = true,
}) => (
  <div className="handler">
    <LoadingHandler
      loading={loading}
      message={loadingMessage}
      LoadingComponent={LoadingComponent}
    />

    <ErrorHandler message={errorMessage} ErrorComponent={ErrorComponent} />

    <EmptyHandler
      message={emptyMessage}
      emptyPropertyKey={emptyPropertyKey}
      EmptyComponent={EmptyComponent}
      componentProps={componentProps}
      Component={Component}
    />
  </div>
);

Handler.propTypes = {
  LoadingComponent: PropTypes.func,
  ErrorComponent: PropTypes.func,
  EmptyComponent: PropTypes.func,
  Component: PropTypes.func.isRequired,
  loadingMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptyPropertyKey: PropTypes.string,
  componentProps: PropTypes.object,
  loading: PropTypes.bool,
};

export default Handler;
