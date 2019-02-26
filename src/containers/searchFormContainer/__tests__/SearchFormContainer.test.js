import React from 'react';
import renderer from 'react-test-renderer';
import { SearchFormContainer } from '../SearchFormContainer';
import { RouterService } from '../../../services/RouterService';

jest.mock('../../../actions/searchActions');
jest.mock('../../../actions/searchParamsActions');
jest.mock('../../../reducers/searchParamsReducer');
jest.mock('../../../services/RouterService');
jest.mock('../../../components/searchForm/SearchForm', () => ({
  SearchForm: 'SearchForm',
}));

describe('SearchFormContainer', () => {
  it('should be rendered correctly', () => {
    const tree = renderer
      .create((
        <SearchFormContainer
          routerService={new RouterService(null, null)}
          query="Test search query"
          search={jest.fn()}
          searchReset={jest.fn()}
          updateSearchQuery={jest.fn()}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should fire callbacks', () => {
    const onSearch = jest.fn();
    const onSearchReset = jest.fn();
    const onQueryUpdate = jest.fn();

    const testComponentInstance = renderer
      .create((
        <SearchFormContainer
          routerService={new RouterService(null, null)}
          query="Test search query"
          search={onSearch}
          searchReset={onSearchReset}
          updateSearchQuery={onQueryUpdate}
        />
      )).root;

    const searchFormInstance = testComponentInstance.findByType('SearchForm');

    const searchQuery = 'cats';
    const searchUpdatedQuery = 'dogs';

    searchFormInstance.props.onSearchSubmit(searchQuery);
    searchFormInstance.props.onSearchUpdate(searchUpdatedQuery);
    searchFormInstance.props.onSearchReset();

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenLastCalledWith({ query: searchQuery });

    expect(onQueryUpdate).toHaveBeenCalledTimes(1);
    expect(onQueryUpdate).toHaveBeenLastCalledWith(searchUpdatedQuery);

    expect(onSearchReset).toHaveBeenCalledTimes(1);

    expect(searchFormInstance).toBeDefined();
  });
});
