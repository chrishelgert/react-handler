import React, { PropTypes } from 'react';
import renderer from 'react-test-renderer';
import Handler from '../../src/components/Handler';

const LoadingComponent = () => <h2 className="loading">loading...</h2>;
const ErrorComponent = ({ children }) => <h2 className="error">{children}</h2>;
ErrorComponent.propTypes = { children: PropTypes.string };
const EmptyComponent = ({ children }) => <h2 className="empty">{children}</h2>;
EmptyComponent.propTypes = { children: PropTypes.string };
const Component = () => <div>Test</div>;
const errorMsg = 'error..';
const emptyMsg = 'empty..';

describe('Handler', () => {
  describe('loading-state', () => {
    it('should return the LoadingComponent, when it is set', () => {
      const tree = renderer.create(
        <Handler
          LoadingComponent={LoadingComponent}
          Component={Component}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should return the LoadingMessage', () => {
      const tree = renderer.create(
        <Handler Component={Component} />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('error-state', () => {
    it('should return the ErrorComponent, when it is set', () => {
      const tree = renderer.create(
        <Handler
          loading={false}
          errorMsg={errorMsg}
          ErrorComponent={ErrorComponent}
          Component={Component}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should return the ErrorMessage', () => {
      const tree = renderer.create(
        <Handler
          loading={false}
          errorMsg={errorMsg}
          Component={Component}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('empty-state', () => {
    it('should return the EmptyComponent, when it is set', () => {
      const tree = renderer.create(
        <Handler
          loading={false}
          EmptyComponent={EmptyComponent}
          emptyPropertyKey="list"
          emptyMsg={emptyMsg}
          componentProps={{ list: [] }}
          Component={Component}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should return the EmptyMessage', () => {
      const tree = renderer.create(
        <Handler
          loading={false}
          emptyPropertyKey="list"
          emptyMsg={emptyMsg}
          componentProps={{ list: [] }}
          Component={Component}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('Component', () => {
    it('should return the Component, when there is no error, loading false and no emptyPropertyKey', () => {
      const tree = renderer.create(
        <Handler
          LoadingComponent={LoadingComponent}
          Component={Component}
          loading={false}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should return the Component, when there is no error, loading false and the entry filled', () => {
      const tree = renderer.create(
        <Handler
          LoadingComponent={LoadingComponent}
          Component={Component}
          componentProps={{ list: ['abc'] }}
          emptyPropertyKey="list"
          loading={false}
        />,
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
