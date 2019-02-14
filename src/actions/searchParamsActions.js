export const SEARCH_ACTION_TYPES = {
  UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY',
  UPDATE_OFFSET: 'UPDATE_OFFSET',
};

// Update the value of search query.
export function updateSearchQuery(searchQuery) {
  return dispatch => dispatch({
    type: SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY,
    payload: searchQuery,
  });
}

// Update current search offset.
export function updateOffset(offset) {
  return dispatch => dispatch({
    type: SEARCH_ACTION_TYPES.UPDATE_OFFSET,
    payload: offset,
  });
}
