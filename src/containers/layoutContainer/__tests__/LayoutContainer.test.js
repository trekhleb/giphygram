import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutContainer } from '../LayoutContainer';

jest.mock('../../../components/shared/layout/Layout', () => ({
  Layout: 'Layout',
}));

describe('LayoutContainer', () => {
  it('should be rendered correctly by default with one child', () => {
    const layoutResize = jest.fn();

    const tree = renderer
      .create((
        <LayoutContainer layoutResize={layoutResize}>
          <div>Child</div>
        </LayoutContainer>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly by default with several children', () => {
    const layoutResize = jest.fn();

    const tree = renderer
      .create((
        <LayoutContainer layoutResize={layoutResize}>
          <div>Child #1</div>
          <div>Child #2</div>
        </LayoutContainer>
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should fire layoutResize callback', () => {
    const layoutResize = jest.fn();

    const layoutContainerComponent = renderer
      .create((
        <LayoutContainer layoutResize={layoutResize}>
          <div>Child #1</div>
          <div>Child #2</div>
        </LayoutContainer>
      )).root;

    expect(layoutResize).not.toHaveBeenCalled();

    const layoutComponent = layoutContainerComponent.findByType('Layout');
    expect(layoutComponent).toBeDefined();

    // Call onResize event.
    layoutComponent.props.onMediaQueryChange('sm');

    expect(layoutResize).toHaveBeenCalledTimes(1);
    expect(layoutResize).toHaveBeenLastCalledWith('sm');
  });
});
