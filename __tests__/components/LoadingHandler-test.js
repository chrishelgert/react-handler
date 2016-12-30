import React from 'react';
import renderer from 'react-test-renderer';
import LoadingHandler from '../../src/components/LoadingHandler';

const TestComponent = () => <h1>Test</h1>;
const LoadingComponent = () => <img src="/img/spinner.svg" alt="loading..." />;

describe('LoadingHandler', () => {
  it('should return the component when called with loading false', () => {
    const tree = renderer.create(
      <LoadingHandler loading={false} Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return null when called with loading false and no component', () => {
    const tree = renderer.create(
      <LoadingHandler loading={false} />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should return the LoadingComponent', () => {
    const tree = renderer.create(
      <LoadingHandler LoadingComponent={LoadingComponent} Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should return the LoadingMessage when called without LoadingComponent', () => {
    const tree = renderer.create(
      <LoadingHandler Component={TestComponent} />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
