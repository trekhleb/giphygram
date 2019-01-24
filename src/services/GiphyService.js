import { RequestService } from './RequestService';
import { GIPHY_API_HOST, GIPHY_API_KEY } from '../config/system';
import { defaultSearchParams } from '../reducers/searchParamsReducer';

export class GiphyService {
  static search({
    query = defaultSearchParams.query,
    limit = defaultSearchParams.limit,
    offset = defaultSearchParams.offset,
    rating = defaultSearchParams.rating,
    lang = defaultSearchParams.lang,
  } ) {
    const searchParams = {
      api_key: GIPHY_API_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    };

    return RequestService.get(`${GIPHY_API_HOST}/v1/gifs/search`, searchParams);
  };
}
