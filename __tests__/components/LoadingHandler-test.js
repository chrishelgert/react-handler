import React from 'react'
import renderer from 'react-test-renderer'
import LoadingHandler from '../../src/components/LoadingHandler'

const TestComponent = () => <h1>Test</h1>
const LoadingComponent = () => <img src='/img/spinner.svg' alt='loading...' />

describe('LoadingHandler', () => {
  test('returns the component when called with loading false', () => {
    const tree = renderer.create(
      <LoadingHandler loading={false}>
        <TestComponent />
      </LoadingHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns null when called with loading false and no component', () => {
    const tree = renderer.create(
      <LoadingHandler loading={false} />
    )
    expect(tree).toMatchSnapshot()
  })

  test('returns the LoadingComponent', () => {
    const tree = renderer.create(
      <LoadingHandler LoadingComponent={LoadingComponent}>
        <TestComponent />
      </LoadingHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the LoadingMessage with given loading message', () => {
    const tree = renderer.create(
      <LoadingHandler message='keep keep loading'>
        <TestComponent />
      </LoadingHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })

  test('returns the LoadingMessage when called without LoadingComponent', () => {
    const tree = renderer.create(
      <LoadingHandler>
        <TestComponent />
      </LoadingHandler>
    )
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
