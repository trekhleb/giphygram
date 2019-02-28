import React from 'react';
import renderer from 'react-test-renderer';
import { SearchResultsContainer } from '../SearchResultsContainer';

jest.mock(
  '../../../components/shared/infiniteScroll/InfiniteScroll',
  () => ({
    InfiniteScroll: 'InfiniteScroll',
  }),
);

jest.mock(
  '../../../components/searchResults/SearchResults',
  () => ({
    SearchResults: 'SearchResults',
  }),
);

describe('SearchResultsContainer', () => {
  it('should be rendered correctly', () => {
    const searchMore = jest.fn();

    const testElement = renderer.create((
      <SearchResultsContainer searchMore={searchMore} />
    ));

    expect(testElement.toJSON()).toMatchSnapshot();
    expect(searchMore).not.toHaveBeenCalled();
  });

  it('should be rendered correctly with custom columns num', () => {
    const searchMore = jest.fn();

    const testElement = renderer.create((
      <SearchResultsContainer searchMore={searchMore} columnsNum={4} />
    ));

    expect(testElement.toJSON()).toMatchSnapshot();
    expect(searchMore).not.toHaveBeenCalled();
  });

  it('should fire searchMore callback', () => {
    const searchMore = jest.fn();

    const componentInstance = renderer.create((
      <SearchResultsContainer searchMore={searchMore} />
    )).root;

    expect(searchMore).not.toHaveBeenCalled();

    const infiniteScroller = componentInstance.findByType('InfiniteScroll');
    expect(infiniteScroller).toBeDefined();

    infiniteScroller.props.onFetchMore();
    expect(searchMore).toHaveBeenCalledTimes(1);
  });

  it('should not fire searchMore callback in case if loading is in progress', () => {
    const searchMore = jest.fn();

    const componentInstance = renderer.create((
      <SearchResultsContainer searchMore={searchMore} isLoading />
    )).root;

    expect(searchMore).not.toHaveBeenCalled();

    const infiniteScroller = componentInstance.findByType('InfiniteScroll');
    expect(infiniteScroller).toBeDefined();

    infiniteScroller.props.onFetchMore();
    expect(searchMore).not.toHaveBeenCalled();
  });

  it('should not fire searchMore callback in case if fetching more is in progress', () => {
    const searchMore = jest.fn();

    const componentInstance = renderer.create((
      <SearchResultsContainer searchMore={searchMore} isFetchingMore />
    )).root;

    expect(searchMore).not.toHaveBeenCalled();

    const infiniteScroller = componentInstance.findByType('InfiniteScroll');
    expect(infiniteScroller).toBeDefined();

    infiniteScroller.props.onFetchMore();
    expect(searchMore).not.toHaveBeenCalled();
  });
});
