import { ActionType } from 'redux-promise-middleware';
import { SEARCH_ACTION_TYPES } from '../actions/searchActions';

/**
 * @typedef SearchResultsState
 * @type {object}
 * @property {*[]} data
 * @property {object} pagination
 * @property {object} meta
 * @property {boolean} isLoading
 * @property {boolean} isFetchingMore
 * @property {object} error
 */

/**
 * @type {SearchResultsState}
 */
export const defaultSearchResults = {
  data: [],
  pagination: {},
  meta: {},
  isLoading: false,
  isFetchingMore: false,
  error: null,
};

// Giphy reducer is responsible for storing information from Giphy API.
export const searchResultsReducer = (state = defaultSearchResults, action) => {
  const payloadData = (action.payload && action.payload.data) || null;

  switch (action.type) {
    case SEARCH_ACTION_TYPES.SEARCH_RESET:
      return { ...defaultSearchResults };

    case `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Pending}`:
      return {
        ...state,
        isLoading: true,
        isFetchingMore: false,
        error: null,
      };

    case `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Pending}`:
      return {
        ...state,
        isLoading: false,
        isFetchingMore: true,
        error: null,
      };

    case `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Fulfilled}`:
      return {
        ...state,
        data: payloadData.data,
        pagination: payloadData.pagination,
        meta: payloadData.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Fulfilled}`:
      return {
        ...state,
        data: [...state.data].concat(payloadData.data),
        pagination: payloadData.pagination,
        meta: payloadData.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case `${SEARCH_ACTION_TYPES.SEARCH}_${ActionType.Rejected}`:
      return {
        ...defaultSearchResults,
        isLoading: false,
        isFetchingMore: false,
        error: true,
      };

    case `${SEARCH_ACTION_TYPES.SEARCH_MORE}_${ActionType.Rejected}`:
      return {
        ...state,
        isLoading: false,
        isFetchingMore: false,
        error: true,
      };

    default:
      return state;
  }
};

/**
 * Extracts search results from the store.
 * This is a helper function that allows us to change store structure easily
 * without changing the components.
 *
 * @param {object} state
 * @return {SearchResultsState}
 */
export const getSearchResultsFromState = state => state.searchResults;
