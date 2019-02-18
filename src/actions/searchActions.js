import { GiphyService } from '../services/GiphyService';
import { updateSearchOffset } from './searchParamsActions';
import { SEARCH_BATCH_SIZE } from '../config';
import { getSearchParamsFromState } from '../reducers/searchParamsReducer';

export const SEARCH_ACTION_TYPES = {
  SEARCH: 'SEARCH',
  SEARCH_MORE: 'SEARCH_MORE',
  SEARCH_RESET: 'SEARCH_RESET',
};

// Search on GIPHY.
export function search(searchParams) {
  return {
    type: SEARCH_ACTION_TYPES.SEARCH,
    payload: GiphyService.search(searchParams),
  };
}

// Reset search parameters.
export function searchReset() {
  return {
    type: SEARCH_ACTION_TYPES.SEARCH_RESET,
    payload: null,
  };
}

// Fetch more search results from GIPHY.
export function searchMore(batchSize = SEARCH_BATCH_SIZE) {
  return (dispatch, getState) => {
    const state = getState();
    const searchParams = getSearchParamsFromState(state);

    const offset = searchParams.offset + batchSize;
    searchParams.offset = offset;

    updateSearchOffset(offset)(dispatch);

    dispatch({
      type: SEARCH_ACTION_TYPES.SEARCH_MORE,
      payload: GiphyService.search(searchParams),
    });
  };
}
