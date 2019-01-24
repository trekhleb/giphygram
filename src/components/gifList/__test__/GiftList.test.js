import React from 'react';
import renderer from 'react-test-renderer';
import { GifList } from '../GifList';
import searchResultsMock from '../../../mocks/searchResults';

jest.mock('../../gifItem/GifItem', () => ({
  GifItem: 'GifItem',
}));

jest.mock('../../shared/spinner/Spinner', () => ({
  Spinner: 'Spinner',
}));

describe('GifList', () => {
  it('should be rendered correctly with empty gifs array', () => {
    const tree = renderer
      .create(<GifList gifs={[]} isLoading={false}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly when it is not loading', () => {
    const gifs = searchResultsMock.data;
    const tree = renderer
      .create(<GifList gifs={gifs} isLoading={false}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly when it is not loading', () => {
    const gifs = searchResultsMock.data;
    const tree = renderer
      .create(<GifList gifs={gifs} isLoading/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
