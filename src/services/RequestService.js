import axios from 'axios';

// RequestService is created as a wrapper on top of axios. This is done in order to be able to
// switch to new http-requests library if needed. Utilizing interfaces might be a good option here.
export class RequestService {
  // Perform GET request with parameters.
  static get(url, params = {}) {
    return axios.get(
      url,
      { ...this.getDefaultAxiosConfig(), params },
    );
  }

  // Generate default Axios configuration for requests.
  // We may put here default timeouts etc.
  static getDefaultAxiosConfig() {
    return {};
  }
}
