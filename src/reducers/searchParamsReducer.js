import { SEARCH_ACTION_TYPES } from '../actions/searchParamsActions';
import { GIPHY_BATCH_SIZE } from '../config/system';

export const defaultSearchParams = {
  query: '',
  limit: GIPHY_BATCH_SIZE,
  offset: 0,
  rating: 'G',
  lang: 'en',
};

// Search params reducer is responsible for storing current search parameters (query, offset etc.)
export const searchParamsReducer = (state = defaultSearchParams, action) => {
  switch (action.type) {

    case SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY:
      const query = action.payload;
      return {...state, query};

    case SEARCH_ACTION_TYPES.UPDATE_OFFSET:
      const offset = action.payload;
      return {...state, offset};

    default:
      return state;
  }
};
