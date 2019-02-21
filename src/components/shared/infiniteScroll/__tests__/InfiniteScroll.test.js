import React from 'react';
import renderer from 'react-test-renderer';
import { InfiniteScroll } from '../InfiniteScroll';

describe('InfiniteScroll', () => {
  it('should render one child component correctly', () => {
    const tree = renderer
      .create((
        <InfiniteScroll>
          <div>Child #1</div>
        </InfiniteScroll>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render mant children components correctly', () => {
    const tree = renderer
      .create((
        <InfiniteScroll>
          <div>Child #1</div>
          <div>Child #2</div>
        </InfiniteScroll>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
