import { RequestService } from './RequestService';
import { GIPHY_API_HOST, GIPHY_API_KEY } from '../config';
import { defaultSearchParams } from '../reducers/searchParamsReducer';

// GiphyService is responsible for all integrations with Giphy API.
export class GiphyService {
  // Search for GIFs by specific search query.
  static search({
    query = defaultSearchParams.query,
    limit = defaultSearchParams.limit,
    offset = defaultSearchParams.offset,
    rating = defaultSearchParams.rating,
    lang = defaultSearchParams.lang,
  } = {}) {
    const searchParams = {
      api_key: GIPHY_API_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang,
    };

    return RequestService.get(
      `${GIPHY_API_HOST}/v1/gifs/search`,
      searchParams,
    );
  }
}
