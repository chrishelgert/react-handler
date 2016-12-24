import Handler, * as SupHandlers from '../src';

describe('react-handler', () => {
  it('should contain the Handler-Component', () => {
    expect(Handler).toMatchSnapshot();
  });

  it('should contain the SupHandler´s', () => {
    expect(SupHandlers).toMatchSnapshot();
  });
});
