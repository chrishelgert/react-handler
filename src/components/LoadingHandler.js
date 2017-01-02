import React, { PropTypes } from 'react';

/**
 * This Mini-Handler handles only the loading-state
 * or display the given Component.
 */
const LoadingHandler = ({
  LoadingComponent,
  Component,
  componentProps = {},
  loading = true,
  message = 'loading...',
}) => {
  if (loading) {
    return LoadingComponent ? <LoadingComponent /> : <div className="handler--loading">{message}</div>;
  }

  if (Component) {
    return <Component {...componentProps} />;
  }

  return null;
};

LoadingHandler.propTypes = {
  LoadingComponent: PropTypes.func,
  Component: PropTypes.func,
  componentProps: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoadingHandler;
