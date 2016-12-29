import React, { PropTypes } from 'react';
import { EmptyMessage } from './Messages';
import isEmpty from '../utils/isEmpty';

/**
 * This Mini-Handler handles only the empty-state
 * or display the given Component.
 */
const EmptyHandler = ({
  emptyMsg,
  emptyPropertyKey,
  EmptyComponent,
  Component,
  componentProps = {},
}) => {
  if (isEmpty(emptyPropertyKey, componentProps)) {
    if (EmptyComponent) {
      return <EmptyComponent>{emptyMsg}</EmptyComponent>;
    }

    return <EmptyMessage>{emptyMsg}</EmptyMessage>;
  }

  if (Component) {
    return <Component {...componentProps} />;
  }

  return null;
};

EmptyHandler.propTypes = {
  emptyMsg: PropTypes.string.isRequired,
  emptyPropertyKey: PropTypes.string,
  EmptyComponent: PropTypes.func,
  Component: PropTypes.func,
  componentProps: PropTypes.object,
};

export default EmptyHandler;
