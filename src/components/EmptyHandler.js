import React from 'react'
import PropTypes from 'prop-types'

/**
 * This Mini-Handler handles only the empty-state
 * or display the given Component.
 */
const EmptyHandler = ({ message, checkedProperty, EmptyComponent, children }) => {
  if (!(checkedProperty && checkedProperty.length)) {
    if (EmptyComponent) {
      return <EmptyComponent>{message}</EmptyComponent>
    }

    return <div className='handler--empty'>{message}</div>
  }

  return children
}

EmptyHandler.propTypes = {
  message: PropTypes.string.isRequired,
  checkedProperty: PropTypes.any,
  EmptyComponent: PropTypes.func,
  children: PropTypes.node
}

EmptyHandler.defaultProps = {
  checkedProperty: null,
  EmptyComponent: null,
  children: null
}

export default EmptyHandler
