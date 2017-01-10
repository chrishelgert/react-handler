import React, { PropTypes } from 'react';

/**
 * This Mini-Handler handles only the loading-state
 * or display the given Component.
 */
const LoadingHandler = ({ LoadingComponent, children, loading, message }) => {
  if (loading) {
    return LoadingComponent ? <LoadingComponent /> : <div className="handler--loading">{message}</div>;
  }

  return children;
};

LoadingHandler.propTypes = {
  LoadingComponent: PropTypes.func,
  children: PropTypes.node,
  loading: PropTypes.bool,
  message: PropTypes.string,
};

LoadingHandler.defaultProps = {
  LoadingComponent: null,
  children: null,
  loading: true,
  message: 'loading...',
};

export default LoadingHandler;
