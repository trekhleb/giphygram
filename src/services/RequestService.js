import axios from 'axios';

/**
 * RequestService is created as a wrapper on top of axios. This is done in order to be able to
 * switch to new http-requests library if needed.
 */
export class RequestService {

  static get(url, params = {}) {
    return axios.get(
      url,
      {...this.getDefaultAxiosConfig(), params}
    );
  };

  static getDefaultAxiosConfig() {
    return {};
  }
}
