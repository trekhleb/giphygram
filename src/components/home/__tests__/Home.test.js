import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../Home';

jest.mock(
  '../../../containers/searchResultsContainer/SearchResultsContainer',
  () => 'SearchResultsContainer',
);

jest.mock(
  '../../../containers/searchSummaryContainer/SearchSummaryContainer',
  () => 'searchSummaryContainer',
);

describe('Home', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
