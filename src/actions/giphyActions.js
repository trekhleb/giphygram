import { GiphyService } from '../services/GiphyService';

export const GIPHY_ACTION_TYPES = {
  GIPHY_SEARCH: 'GIPHY_SEARCH',
  GIPHY_SEARCH_MORE: 'GIPHY_SEARCH_MORE',
};

export function giphySearch(searchParams) {
  return (dispatch) => {
    dispatch({
      type: GIPHY_ACTION_TYPES.GIPHY_SEARCH,
      payload: GiphyService.search(searchParams)
    });
  };
}

export function giphySearchMore(searchParams) {
  return (dispatch) => {
    dispatch({
      type: GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE,
      payload: GiphyService.search(searchParams)
    });
  };
}
