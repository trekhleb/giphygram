import React from 'react';
import renderer from 'react-test-renderer';
import { SearchResults } from '../SearchResults';
import searchResultsMock from '../../../mocks/searchResults';

jest.mock('../../searchItem/SearchItem', () => ({
  SearchItem: 'SearchItem',
}));

jest.mock('../../shared/spinner/Spinner', () => ({
  Spinner: 'Spinner',
}));

jest.mock('../../shared/masonryGrid/MasonryGrid', () => ({
  MasonryGrid: 'MasonryGrid',
}));

describe('SearchResults', () => {
  it('should be rendered correctly with empty results array', () => {
    const tree = renderer
      .create(<SearchResults searchItems={[]} isLoading={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly when it is not loading', () => {
    const gifs = searchResultsMock.data;
    const tree = renderer
      .create(<SearchResults searchItems={gifs} isLoading={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly when it is loading', () => {
    const gifs = searchResultsMock.data;
    const tree = renderer
      .create(<SearchResults searchItems={gifs} isLoading />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly when column numbers specified', () => {
    const gifs = searchResultsMock.data;
    const tree = renderer
      .create(<SearchResults searchItems={gifs} isLoading={false} columnsNum={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render search item correctly', () => {
    const gifs = searchResultsMock.data;

    const componentInstance = renderer
      .create(<SearchResults searchItems={gifs} isLoading={false} columnsNum={1} />)
      .getInstance();

    const searchItemTree = renderer
      .create(componentInstance.renderSearchItem(gifs[0]))
      .toJSON();

    expect(searchItemTree).toMatchSnapshot();
  });
});
