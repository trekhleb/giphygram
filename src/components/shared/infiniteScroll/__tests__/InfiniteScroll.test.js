import React from 'react';
import renderer from 'react-test-renderer';
import { InfiniteScroll } from '../InfiniteScroll';

// Create a spy on window.addEventListener() and removeEventListener() functions.
global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();

describe('InfiniteScroll', () => {
  // We need scrollCallback to imitate onScroll window event.
  let onScrollCallback;
  const onScrollCallbackRemove = jest.fn();

  beforeEach(() => {
    // Mock window.addEventListener implementation to be able to fire onScroll callbacks.
    global.addEventListener.mockImplementation((eventName, callback, useCapture) => {
      onScrollCallback = callback;
    });

    // Mock window.addEventListener implementation to be able to fire onScroll callbacks.
    global.removeEventListener.mockImplementation((eventName, callback, useCapture) => {
      if (eventName === 'scroll') {
        onScrollCallbackRemove();
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it('should render many children components correctly', () => {
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

  it('should fire onFetchMore callback', () => {
    // Mock onFetchMore function.
    const onFetchMore = jest.fn();

    // Let's render component.
    renderer.create((
      <InfiniteScroll onFetchMore={onFetchMore} activationDistance={0}>
        <div>Child</div>
      </InfiniteScroll>
    ));

    // Check callbacks after component is rendered.
    expect(onScrollCallback).toBeDefined();
    expect(onFetchMore).not.toHaveBeenCalled();

    // Imitate window onScroll event.
    onScrollCallback();
    expect(onFetchMore).toHaveBeenCalledTimes(1);

    // Try to reduce inner height to prevent onScroll callback from calling.
    // @TODO: Try to set up real values for document.body.offsetHeight.
    // document.body.offsetHeight = 42;
    global.innerHeight = -1;
    global.scrollY = 0;

    onScrollCallback();
    expect(onFetchMore).toHaveBeenCalledTimes(1);
  });

  it('should remove onScroll listener', () => {
    const testComponent = renderer.create((
      <InfiniteScroll>
        <div>Child</div>
      </InfiniteScroll>
    ));

    expect(global.addEventListener).toHaveBeenCalled();
    expect(onScrollCallbackRemove).not.toHaveBeenCalled();

    testComponent.unmount();

    expect(onScrollCallbackRemove).toHaveBeenCalled();
  });
});
