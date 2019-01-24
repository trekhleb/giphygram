export const SEARCH_ACTION_TYPES = {
  UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY'
};

export function updateSearchQuery(searchQuery) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY,
      payload: searchQuery,
    });
  };
}
