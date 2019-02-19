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
});
