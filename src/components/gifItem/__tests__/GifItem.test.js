import React from 'react';
import renderer from 'react-test-renderer';
import { GifItem } from '../GifItem';
import searchResultsMock from '../../../mocks/searchResults';

describe('GifItem', () => {
  it('should be rendered correctly', () => {
    const gif = searchResultsMock.data[0];
    const tree = renderer
      .create(<GifItem gif={gif}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
