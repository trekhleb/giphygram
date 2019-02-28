import React from 'react';
import renderer from 'react-test-renderer';
import { SearchViewTabsContainer } from '../SearchViewTabsContainer';

jest.mock('../../../components/searchViewTabs/SearchViewTabs', () => ({
  SearchViewTabs: 'SearchViewTabs',
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
});
