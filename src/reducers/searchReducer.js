import { SEARCH_ACTION_TYPES } from '../actions/searchActions';

export const defaultSearchParams = {
  query: '',
  limit: 10,
  offset: 0,
  rating: 'G',
  lang: 'en',
};

export const searchReducer = (state = defaultSearchParams, action) => {
  switch (action.type) {

    case SEARCH_ACTION_TYPES.UPDATE_SEARCH_QUERY:
      const query = action.payload;
      return {...state, query};

    default:
      return state;
  }
};
