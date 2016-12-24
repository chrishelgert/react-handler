import isEmpty from '../../src/utils/isEmpty';

describe('isEmpty', () => {
  it('should return false, when the key is not defined', () => {
    expect(isEmpty(undefined, {})).toBeFalsy();
  });

  it('should return true, when there is no entry for the key', () => {
    expect(isEmpty('list', {})).toBeTruthy();
  });

  it('should return true, when the entry is empty', () => {
    expect(isEmpty('list', { list: [] })).toBeTruthy();
  });

  it('should return false, when the entry is filled', () => {
    expect(isEmpty('list', { list: ['test'] })).toBeFalsy();
  });
});
