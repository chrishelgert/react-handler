import React from 'react'
import renderer from 'react-test-renderer'
import Handler from '../../src/components/Handler'

const Component = () => <div>Test</div>
const checkedProperty = ['test']

describe('Handler', () => {
  test('returns the loading-message and the component', () => {
    const tree = renderer.create(
      <Handler checkedProperty={checkedProperty} emptyMessage='0 Articles found'>
        <Component />
      </Handler>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns only the loading-message when showComponentWhileLoading is false', () => {
    const tree = renderer.create(
      <Handler showComponentWhileLoading={false} checkedProperty={checkedProperty} emptyMessage='0 Articles found'>
        <Component />
      </Handler>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the Component when loading and showComponentWhileLoading is false', () => {
    const tree = renderer.create(
      <Handler
        showComponentWhileLoading={false}
        loading={false}
        checkedProperty={checkedProperty}
        emptyMessage='0 Articles found'
      >
        <Component />
      </Handler>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })
})
