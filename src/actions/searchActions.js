import { GiphyService } from '../services/GiphyService';
import { updateSearchOffset } from './searchParamsActions';
import { SEARCH_BATCH_SIZE } from '../config';
import { getSearchParamsFromState } from '../reducers/searchParamsReducer';
import { getSearchResultsFromState } from '../reducers/searchResultsReducer';

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

    // Fetch total number of results.
    const { pagination = {}, isFetchingMore, isLoading } = getSearchResultsFromState(state);

    const totalCount = pagination.total_count || 0;

    // Don't fetch anything if fetching is in progress right now.
    if (isFetchingMore || isLoading) {
      return null;
    }

    // Fetch current offset from search params.
    const searchParams = getSearchParamsFromState(state);
    const offset = searchParams.offset + batchSize;
    searchParams.offset = offset;

    // Check whether we want to fetch more results that actually exists on the server.
    if (offset >= totalCount) {
      // Nothing to fetch.
      return null;
    }

    // Update search offset in the store.
    dispatch(updateSearchOffset(offset));

    // Fetch new search results and put them to the store.
    dispatch({
      type: SEARCH_ACTION_TYPES.SEARCH_MORE,
      payload: GiphyService.search(searchParams),
    });

    return null;
  };
}
