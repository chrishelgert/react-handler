import React, { PropTypes } from 'react';
import ErrorEmptyHandler from './ErrorEmptyHandler';
import LoadingHandler from './LoadingHandler';

/**
 * The Handler handles loading, error and empty state
 * or display the given Component.
 */
const Handler = (props) => {
  const {
    LoadingComponent,
    loadingMessage,
    children,
    loading = true,
    showComponentWhileLoading = true,
  } = props;

  if (showComponentWhileLoading) {
    return (
      <div className="handler">
        <LoadingHandler
          loading={loading}
          message={loadingMessage}
          LoadingComponent={LoadingComponent}
        />

        <ErrorEmptyHandler {...props}>
          {children}
        </ErrorEmptyHandler>
      </div>
    );
  }

  return (
    <div className="handler">
      <LoadingHandler
        loading={loading}
        message={loadingMessage}
        LoadingComponent={LoadingComponent}
      >
        <ErrorEmptyHandler {...props}>
          {children}
        </ErrorEmptyHandler>
      </LoadingHandler>
    </div>
  );
};

Handler.propTypes = {
  LoadingComponent: PropTypes.func,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  showComponentWhileLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Handler;
