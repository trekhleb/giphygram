import {
  SEARCH_PARAMS_ACTION_TYPES,
  updateSearchOffset,
  updateSearchQuery,
} from '../searchParamsActions';

describe('searchParamsActions', () => {
  it('should generate updateSearchQuery', () => {
    const searchQuery = 'kitten';
    const action = updateSearchQuery(searchQuery);
    expect(action).toEqual({
      type: SEARCH_PARAMS_ACTION_TYPES.UPDATE_SEARCH_QUERY,
      payload: searchQuery,
    });
  });

  it('should generate updateSearchOffset', () => {
    const searchOffset = 50;
    const action = updateSearchOffset(searchOffset);
    expect(action).toEqual({
      type: SEARCH_PARAMS_ACTION_TYPES.UPDATE_SEARCH_OFFSET,
      payload: searchOffset,
    });
  });
});
