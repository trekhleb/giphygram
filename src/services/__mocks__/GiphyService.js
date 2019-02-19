import { RequestService } from './RequestService';
import { GIPHY_API_HOST } from '../../config';

// GiphyService mock.
export class GiphyService {
  static search(searchParams) {
    return RequestService.get(
      `${GIPHY_API_HOST}/v1/gifs/search`,
      searchParams,
    );
  }
}
