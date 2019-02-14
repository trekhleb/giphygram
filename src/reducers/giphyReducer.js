import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { GIPHY_ACTION_TYPES } from '../actions/giphyActions';

const initialState = {
  data: [],
  pagination: {},
  meta: {},
  isLoading: false,
  isFetchingMore: false,
  error: null,
};

// Giphy reducer is responsible for storing information from Giphy API.
export const giphyReducer = (state = initialState, action) => {
  const payloadData = (action.payload && action.payload.data) || null;

  switch (action.type) {
    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH}_${PENDING}`:
      return {
        ...state,
        isLoading: true,
        isFetchingMore: false,
        error: null,
      };

    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE}_${PENDING}`:
      return {
        ...state,
        isLoading: false,
        isFetchingMore: true,
        error: null,
      };

    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH}_${FULFILLED}`:
      return {
        ...state,
        data: payloadData.data,
        pagination: payloadData.pagination,
        meta: payloadData.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE}_${FULFILLED}`:
      return {
        ...state,
        data: [...state.data].concat(payloadData.data),
        pagination: payloadData.pagination,
        meta: payloadData.meta,
        isLoading: false,
        isFetchingMore: false,
        error: null,
      };

    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH}_${REJECTED}`:
      return {
        ...initialState,
        error: true,
      };

    case `${GIPHY_ACTION_TYPES.GIPHY_SEARCH_MORE}_${REJECTED}`:
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
