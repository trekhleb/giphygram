import {
  searchParamsReducer,
  defaultSearchParams,
  getSearchParamsFromState,
} from '../searchParamsReducer';
import { SEARCH_ACTION_TYPES } from '../../actions/searchActions';
import { SEARCH_PARAMS_ACTION_TYPES } from '../../actions/searchParamsActions';

describe('searchParamsReducer', () => {
  it('should generate default state correctly', () => {
    const state = defaultSearchParams;
    const action = {
      type: 'unknown',
      payload: null,
    };
    expect(searchParamsReducer(state, action)).toEqual(defaultSearchParams);
  });

  it('should extract params from state correctly', () => {
    const state = {
      searchParams: 42,
    };
    expect(getSearchParamsFromState(state)).toBe(42);
  });

  it('should react on reset action correctly', () => {
    const state = defaultSearchParams;
    const action = {
      type: SEARCH_ACTION_TYPES.SEARCH_RESET,
      payload: null,
    };
    expect(searchParamsReducer(state, action)).toEqual(state);
  });

  it('should react on update search query correctly', () => {
    const state = defaultSearchParams;
    const action = {
      type: SEARCH_PARAMS_ACTION_TYPES.UPDATE_SEARCH_QUERY,
      payload: 'kitten',
    };
    expect(searchParamsReducer(state, action).query).toBe('kitten');
  });

  it('should react on update search offset correctly', () => {
    const state = defaultSearchParams;
    const action = {
      type: SEARCH_PARAMS_ACTION_TYPES.UPDATE_SEARCH_OFFSET,
      payload: 42,
    };
    expect(searchParamsReducer(state, action).offset).toBe(42);
  });
});
