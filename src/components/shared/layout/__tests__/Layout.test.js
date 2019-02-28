import React from 'react';
import renderer from 'react-test-renderer';
import { Layout } from '../Layout';
import { SCREEN_SIZES } from '../../../../services/LayoutService';

describe('Layout', () => {
  it('should render one child component inside the layout', () => {
    const tree = renderer
      .create((
        <Layout>
          <div>One and only child</div>
        </Layout>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render more than one child component inside the layout', () => {
    const tree = renderer
      .create((
        <Layout>
          <div>First child</div>
          <div>Second child</div>
        </Layout>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should fire onMediaQueryInit callback', () => {
    const onMediaQueryInit = jest.fn();

    renderer.create((
      <Layout onMediaQueryInit={onMediaQueryInit}>
        <div>One and only child</div>
      </Layout>
    ));

    expect(onMediaQueryInit).toHaveBeenCalledTimes(1);
    expect(onMediaQueryInit).toHaveBeenCalledWith('xs');
  });

  it('should fire onMediaQueryChange callback when media query matches', () => {
    // Mock window.matchMedia() method.
    // Normally when we add listener it doesn't fire up.
    // But here we're fire the listener just after the subscription
    // for testing purpose only.
    global.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: callback => callback({ matches: true }),
      removeListener: jest.fn(),
    }));

    const onMediaQueryChange = jest.fn();
    const onMediaQueryInit = jest.fn();

    renderer.create((
      <Layout
        onMediaQueryChange={onMediaQueryChange}
        onMediaQueryInit={onMediaQueryInit}
      >
        <div>One and only child</div>
      </Layout>
    ));

    expect(onMediaQueryInit).toHaveBeenCalledTimes(1);
    expect(onMediaQueryInit).toHaveBeenCalledWith('xs');

    expect(onMediaQueryChange).toHaveBeenCalledTimes(Object.keys(SCREEN_SIZES).length);
    expect(onMediaQueryChange.mock.calls[0][0]).toEqual(SCREEN_SIZES.xl.id);
    expect(onMediaQueryChange.mock.calls[1][0]).toEqual(SCREEN_SIZES.lg.id);
    expect(onMediaQueryChange.mock.calls[2][0]).toEqual(SCREEN_SIZES.md.id);
    expect(onMediaQueryChange.mock.calls[3][0]).toEqual(SCREEN_SIZES.sm.id);
    expect(onMediaQueryChange.mock.calls[4][0]).toEqual(SCREEN_SIZES.xs.id);
  });

  it('should not fire onMediaQueryChange callback when media query does not match', () => {
    // Mock window.matchMedia() method.
    // Normally when we add listener it doesn't fire up.
    // But here we're fire the listener just after the subscription
    // for testing purpose only.
    global.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: callback => callback({ matches: false }),
      removeListener: jest.fn(),
    }));

    const onMediaQueryChange = jest.fn();
    const onMediaQueryInit = jest.fn();

    renderer.create((
      <Layout
        onMediaQueryChange={onMediaQueryChange}
        onMediaQueryInit={onMediaQueryInit}
      >
        <div>One and only child</div>
      </Layout>
    ));

    expect(onMediaQueryInit).toHaveBeenCalledTimes(1);
    expect(onMediaQueryInit).toHaveBeenCalledWith('xs');

    expect(onMediaQueryChange).not.toHaveBeenCalled();
  });
});
