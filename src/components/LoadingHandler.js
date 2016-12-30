import React, { PropTypes } from 'react';
import { LoadingMessage } from './Messages';

/**
 * This Mini-Handler handles only the loading-state
 * or display the given Component.
 */
const LoadingHandler = ({
  LoadingComponent,
  Component,
  componentProps = {},
  loading = true,
}) => {
  if (loading) {
    return LoadingComponent ? <LoadingComponent /> : <LoadingMessage />;
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
};

export default LoadingHandler;
