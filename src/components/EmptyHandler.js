import React, { PropTypes } from 'react';
import isEmpty from '../utils/isEmpty';

/**
 * This Mini-Handler handles only the empty-state
 * or display the given Component.
 */
const EmptyHandler = ({
  message,
  emptyPropertyKey,
  EmptyComponent,
  Component,
  componentProps = {},
}) => {
  if (isEmpty(emptyPropertyKey, componentProps)) {
    if (EmptyComponent) {
      return <EmptyComponent>{message}</EmptyComponent>;
    }

    return <div className="handler--empty">{message}</div>;
  }

  if (Component) {
    return <Component {...componentProps} />;
  }

  return null;
};

EmptyHandler.propTypes = {
  message: PropTypes.string.isRequired,
  emptyPropertyKey: PropTypes.string,
  EmptyComponent: PropTypes.func,
  Component: PropTypes.func,
  componentProps: PropTypes.object,
};

export default EmptyHandler;
