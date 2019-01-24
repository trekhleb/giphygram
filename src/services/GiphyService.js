import { RequestService } from './RequestService';
import { GIPHY_API_HOST, GIPHY_API_KEY } from '../config/system';

export class GiphyService {
  static async search(query, limit = 10, offset = 0, rating = 'G', lang = 'en') {
    const searchParams = {
      api_key: GIPHY_API_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    };

    return await RequestService.get(`${GIPHY_API_HOST}/v1/gifs/search`, searchParams);
  };
}
