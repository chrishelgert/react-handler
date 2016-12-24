import React, { PropTypes } from 'react';
import { LoadingMessage, ErrorMessage, EmptyMessage } from './Messages';
import isEmpty from '../utils/isEmpty';

/**
 * The Handler handles loading, error and empty state
 * or display the given Component.
 */
const Handler = ({
  LoadingComponent,
  ErrorComponent,
  EmptyComponent,
  Component,
  errorMsg,
  emptyMsg,
  emptyPropertyKey,
  componentProps = {},
  loading = true,
}) => {
  if (loading) {
    return LoadingComponent ? <LoadingComponent /> : <LoadingMessage />;
  }

  if (errorMsg) {
    if (ErrorComponent) {
      return <ErrorComponent>{errorMsg}</ErrorComponent>;
    }

    return <ErrorMessage>{errorMsg}</ErrorMessage>;
  }

  if (isEmpty(emptyPropertyKey, componentProps)) {
    if (EmptyComponent) {
      return <EmptyComponent>{emptyMsg}</EmptyComponent>;
    }

    return <EmptyMessage>{emptyMsg}</EmptyMessage>;
  }

  return <Component {...componentProps} />;
};

Handler.propTypes = {
  LoadingComponent: PropTypes.func,
  ErrorComponent: PropTypes.func,
  EmptyComponent: PropTypes.func,
  Component: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  emptyMsg: PropTypes.string,
  emptyPropertyKey: PropTypes.string,
  componentProps: PropTypes.object,
  loading: PropTypes.bool,
};

export default Handler;
