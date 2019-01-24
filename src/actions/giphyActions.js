import { GiphyService } from '../services/GiphyService';
import { updateOffset } from './searchParamsActions';
import { GIPHY_BATCH_SIZE } from '../config/system';

export const GIPHY_ACTION_TYPES = {
  GIPHY_SEARCH: 'GIPHY_SEARCH',
  GIPHY_SEARCH_MORE: 'GIPHY_SEARCH_MORE',
};

// Search on GIPHY.
export function giphySearch(searchParams) {
  return (dispatch) => {
    dispatch({
      type: GIPHY_ACTION_TYPES.GIPHY_SEARCH,
      payload: GiphyService.search(searchParams)
    });
  };
}

// Fetch more search results from GIPHY.
export function giphySearchMore(batchSize = GIPHY_BATCH_SIZE) {
  return (dispatch, getState) => {
    const { searchParams } = getState();

    const offset = searchParams.offset + batchSize;
    searchParams.offset = offset;

    updateOffset(offset)(dispatch);

    dispatch({
      type: GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE,
      payload: GiphyService.search(searchParams)
    });
  };
}
