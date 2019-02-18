import { SEARCH_ACTION_TYPES } from '../actions/searchParamsActions';
import { SEARCH_BATCH_SIZE } from '../config/system';

/**
 * @typedef SearchParamsState
 * @type {object}
 * @property {string} query - search query string.
 * @property {number} limit - number of gifs that are being fetched per one search request.
 * @property {number} offset - offset of the search results.
 * @property {string} rating - gifs rating.
 * @property {string} lang - gifs language.
 */

/**
 * @type {SearchParamsState}
 */
export const defaultSearchParams = {
  query: '',
  limit: SEARCH_BATCH_SIZE,
  offset: 0,
  rating: 'G',
  lang: 'en',
};

// Search params reducer is responsible for storing current search parameters (query, offset etc.)
export const searchParamsReducer = (state = defaultSearchParams, action) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY:
      return { ...state, query: action.payload };

    case SEARCH_ACTION_TYPES.UPDATE_OFFSET:
      return { ...state, offset: action.payload };

    default:
      return state;
  }
};

/**
 * Extracts search parameters from the store.
 * This is a helper function that allows us to change store structure easily
 * without changing the components.
 *
 * @param {object} state
 * @return {SearchParamsState}
 */
export const getSearchParamsFromState = state => state.searchParams;
