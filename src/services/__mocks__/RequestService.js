import searchResultsMock from '../../mocks/searchResults';

// Mock of the RequestService.
export class RequestService {
  static get(url, params = {}) {
    return Promise.resolve(searchResultsMock);
  }
}
