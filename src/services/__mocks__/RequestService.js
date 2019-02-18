import searchResultsMock from '../../mocks/searchResults';

// Mock of the RequestService.
export class RequestService {
  static get() {
    return Promise.resolve(searchResultsMock);
  }
}
