import React from 'react';
import renderer from 'react-test-renderer';
import { SearchPage } from '../SearchPage';

jest.mock(
  '../../../containers/searchResultsContainer/SearchResultsContainer',
  () => 'SearchResultsContainer',
);

jest.mock(
  '../../../containers/searchSummaryContainer/SearchSummaryContainer',
  () => 'SearchSummaryContainer',
);

jest.mock(
  '../../../containers/searchViewTabsContainer/SearchViewTabsContainer',
  () => 'SearchViewTabsContainer',
);

describe('SearchPage', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create(<SearchPage />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
