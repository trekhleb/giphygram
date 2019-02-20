import React from 'react';
import renderer from 'react-test-renderer';
import { SearchFormContainer } from '../SearchFormContainer';

jest.mock('../../../actions/searchActions');
jest.mock('../../../actions/searchParamsActions');
jest.mock('../../../reducers/searchParamsReducer');
jest.mock('../../../components/searchForm/SearchForm', () => ({
  SearchForm: 'SearchForm',
}));

describe('SearchFormContainer', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create((
        <SearchFormContainer
          query="Test search query"
          search={jest.fn()}
          searchReset={jest.fn()}
          updateSearchQuery={jest.fn()}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
