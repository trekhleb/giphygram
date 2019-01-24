import { GIPHY_ACTION_TYPES } from '../actions/giphyActions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const initialState = {
  data: [],
  pagination: {},
  meta: {},
  isLoading: false,
  isFetchingMore: false,
  error: null,
};

export const giphyReducer = (state = initialState, action) => {
  switch (action.type) {

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + PENDING:
      return {
        ...state,
        isLoading: true,
        isFetchingMore: false,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE + '_' + PENDING:
      return {
        ...state,
        isLoading: false,
        isFetchingMore: true,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + FULFILLED:
      return {
        ...state,
        data: action.payload.data.data,
        pagination: action.payload.data.pagination,
        meta: action.payload.data.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE + '_' + FULFILLED:
      const data = state.data;

      return {
        ...state,
        data: data.concat(action.payload.data.data),
        pagination: action.payload.data.pagination,
        meta: action.payload.data.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + REJECTED:
      return {
        ...initialState,
        error: true,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE + '_' + REJECTED:
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
