import React from 'react';
import renderer from 'react-test-renderer';
import { LoadingMessage, EmptyMessage, ErrorMessage } from '../../src/components/Messages';

describe('Messages', () => {
  describe('LoadingMessage', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<LoadingMessage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('EmptyMessage', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<EmptyMessage>empty</EmptyMessage>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ErrorMessage', () => {
    it('should match the snapshot', () => {
      const tree = renderer.create(<ErrorMessage>error</ErrorMessage>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
