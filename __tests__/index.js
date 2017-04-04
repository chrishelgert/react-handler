import Handler, * as SupHandlers from '../src'

describe('react-handler', () => {
  test('contains the Handler-Component', () => {
    expect(Handler).toMatchSnapshot()
  })

  test('contains the the SupHandler´s', () => {
    expect(SupHandlers).toMatchSnapshot()
  })
})
