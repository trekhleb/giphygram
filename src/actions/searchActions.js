export const SEARCH_ACTION_TYPES = {
  UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY',
  UPDATE_OFFSET: 'UPDATE_OFFSET',
};

export function updateSearchQuery(searchQuery) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY,
      payload: searchQuery,
    });
  };
}

export function updateOffset(offset) {
  return (dispatch) => {
    return dispatch({
      type: SEARCH_ACTION_TYPES.UPDATE_OFFSET,
      payload: offset,
    });
  };
}
