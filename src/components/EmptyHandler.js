import React, { PropTypes } from 'react';

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
  if (emptyPropertyKey) {
    const match = componentProps[emptyPropertyKey];

    if (!(match && match.length)) {
      if (EmptyComponent) {
        return <EmptyComponent>{message}</EmptyComponent>;
      }

      return <div className="handler--empty">{message}</div>;
    }
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
