import React from 'react';
import renderer from 'react-test-renderer';
import SearchViewTabsContainerConnected, { SearchViewTabsContainer } from '../SearchViewTabsContainer';

jest.mock('../../../components/searchViewTabs/SearchViewTabs', () => ({
  SearchViewTabs: 'SearchViewTabs',
}));

jest.mock('react-redux', () => ({
  connect: mapStateToProps => (Component) => {
    const state = {
      layout: {
        size: 'sm',
      },
      searchResults: {
        data: [],
        pagination: {
          total_count: 100,
        },
        meta: {},
        isLoading: false,
        isFetchingMore: false,
        error: null,
      },
    };
    const propsFromState = mapStateToProps(state);
    return props => <Component {...props} {...propsFromState} />;
  },
}));

describe('SearchViewTabsContainer', () => {
  it('should be rendered correctly by default', () => {
    const setColumnsNum = jest.fn();

    const tree = renderer
      .create((
        <SearchViewTabsContainer
          isHidden={false}
          setColumnsNum={setColumnsNum}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with specified columns number', () => {
    const setColumnsNum = jest.fn();

    const tree = renderer
      .create((
        <SearchViewTabsContainer
          isHidden={false}
          setColumnsNum={setColumnsNum}
          columnsNum={4}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be hidden is it is required by properties', () => {
    const setColumnsNum = jest.fn();

    const tree = renderer
      .create((
        <SearchViewTabsContainer
          isHidden
          setColumnsNum={setColumnsNum}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered and connected correctly by default', () => {
    const setColumnsNum = jest.fn();

    const tree = renderer
      .create((
        <SearchViewTabsContainerConnected
          setColumnsNum={setColumnsNum}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should fire onColumnsNumChange callback', () => {
    const setColumnsNum = jest.fn();

    const searchViewTabsContainerComponent = renderer
      .create((
        <SearchViewTabsContainer
          isHidden={false}
          setColumnsNum={setColumnsNum}
        />
      )).root;

    const searchViewTabsComponent = searchViewTabsContainerComponent.findByType('SearchViewTabs');

    expect(searchViewTabsComponent).toBeDefined();

    // Emulate onColumnsNumChange event.
    searchViewTabsComponent.props.onColumnsNumChange(4);

    expect(setColumnsNum).toHaveBeenCalledTimes(1);
    expect(setColumnsNum).toHaveBeenCalledWith(4);
  });
});
