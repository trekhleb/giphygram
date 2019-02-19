import React from 'react';
import renderer from 'react-test-renderer';
import { SearchItem } from '../SearchItem';
import searchResultsMock from '../../../mocks/searchResults';

describe('SearchItem', () => {
  it('should be rendered correctly', () => {
    const gifEntity = searchResultsMock.data[0];
    const tree = renderer
      .create(<SearchItem item={gifEntity} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
