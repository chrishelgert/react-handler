import React, { PropTypes } from 'react';

export const LoadingMessage = () => (
  <div className="handler--loading">loading...</div>
);

export const ErrorMessage = ({ children }) => (
  <div className="handler--error">{children}</div>
);

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export const EmptyMessage = ({ children }) => (
  <div className="handler--empty">{children}</div>
);

EmptyMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
