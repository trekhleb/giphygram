import { ActionType } from 'redux-promise-middleware';
import {
  searchResultsReducer,
  getSearchResultsFromState,
  defaultSearchResults,
} from '../searchResultsReducer';
import { SEARCH_ACTION_TYPES } from '../../actions/searchActions';

describe('searchResultsReducer', () => {
  it('should generate default state correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: 'unknown',
      payload: null,
    };
    expect(searchResultsReducer(state, action)).toEqual(defaultSearchResults);
  });

  it('should extract params from state correctly', () => {
    const state = {
      searchResults: 42,
    };
    expect(getSearchResultsFromState(state)).toBe(42);
  });

  it('should react on reset action correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: SEARCH_ACTION_TYPES.SEARCH_RESET,
      payload: null,
    };
    expect(searchResultsReducer(state, action)).toEqual(state);
  });

  it('should react on pending search correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Pending}`,
      payload: null,
    };
    expect(searchResultsReducer(state, action).isLoading).toBe(true);
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(false);
  });

  it('should react on pending search more correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Pending}`,
      payload: null,
    };
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(true);
    expect(searchResultsReducer(state, action).isLoading).toBe(false);
  });

  it('should react on pending search fulfilled correctly', () => {
    const state = { ...defaultSearchResults };
    state.data = [
      'result #1',
    ];
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Fulfilled}`,
      payload: {
        data: {
          data: [
            'result #2',
          ],
        },
      },
    };
    expect(searchResultsReducer(state, action).data).toEqual([
      'result #2',
    ]);
    expect(searchResultsReducer(state, action).isLoading).toBe(false);
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(false);
  });

  it('should react on pending search more fulfilled correctly', () => {
    const state = { ...defaultSearchResults };
    state.data = [
      'result #1',
    ];
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Fulfilled}`,
      payload: {
        data: {
          data: [
            'result #2',
          ],
        },
      },
    };
    expect(searchResultsReducer(state, action).data).toEqual([
      'result #1',
      'result #2',
    ]);
    expect(searchResultsReducer(state, action).isLoading).toBe(false);
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(false);
  });

  it('should react on pending search rejected correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Rejected}`,
      payload: null,
    };
    expect(searchResultsReducer(state, action).isLoading).toBe(false);
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(false);
    expect(searchResultsReducer(state, action).error).toBe(true);
  });

  it('should react on pending search more rejected correctly', () => {
    const state = { ...defaultSearchResults };
    const action = {
      type: `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Rejected}`,
      payload: null,
    };
    expect(searchResultsReducer(state, action).isLoading).toBe(false);
    expect(searchResultsReducer(state, action).isFetchingMore).toBe(false);
    expect(searchResultsReducer(state, action).error).toBe(true);
  });
});
