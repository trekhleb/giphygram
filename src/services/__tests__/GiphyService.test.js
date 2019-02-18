import { GiphyService } from '../GiphyService';
import searchResultsMock from '../../mocks/searchResults';

jest.mock('../RequestService');

describe('GiphyService', () => {
  it('should perform default search request to GIPHY API', () => (
    expect(GiphyService.search()).resolves.toBe(searchResultsMock)
  ));
});
