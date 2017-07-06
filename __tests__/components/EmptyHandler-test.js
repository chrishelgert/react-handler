import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import EmptyHandler from '../../src/components/EmptyHandler'

const TestComponent = () => <h1>Test</h1>
const EmptyComponent = ({ children }) => <h2 className='empty'>{children}</h2>
EmptyComponent.propTypes = { children: PropTypes.string }
const componentPropsFilled = { list: ['abc', 'def'] }
const componentPropsEmpty = { list: [] }
const emptyMessage = 'no results found'

describe('EmptyHandler', () => {
  test('returns null when called without Component and is not empty', () => {
    const tree = renderer.create(
      <EmptyHandler
        checkedProperty={componentPropsFilled.list}
        message={emptyMessage}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  test('returns the component when the element in componentProps is not empty', () => {
    const tree = renderer.create(
      <EmptyHandler
        checkedProperty={componentPropsFilled.list}
        message={emptyMessage}
      >
        <TestComponent />
      </EmptyHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the EmptyComponent, when the list is empty and called with EmptyComponent', () => {
    const tree = renderer.create(
      <EmptyHandler
        EmptyComponent={EmptyComponent}
        checkedProperty={componentPropsEmpty.list}
        message={emptyMessage}
      >
        <TestComponent />
      </EmptyHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the EmptyMessage, when the list is empty', () => {
    const tree = renderer.create(
      <EmptyHandler
        checkedProperty={componentPropsEmpty.list}
        message={emptyMessage}
      />
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the EmptyMessage, when called without checkedProperty', () => {
    const tree = renderer.create(
      <EmptyHandler message={emptyMessage}>
        <TestComponent />
      </EmptyHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
