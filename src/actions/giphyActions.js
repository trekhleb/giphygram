import { GiphyService } from '../services/GiphyService';

export const GIPHY_ACTION_TYPES = {
  GIPHY_SEARCH: 'GIPHY_SEARCH'
};

export function giphySearch(searchParams) {
  return (dispatch) => {
    dispatch({
      type: GIPHY_ACTION_TYPES.GIPHY_SEARCH,
      payload: GiphyService.search(searchParams)
    });
  };
}
