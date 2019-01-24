import { GIPHY_ACTION_TYPES } from '../actions/giphyActions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const initialState = {
  data: [],
  pagination: {},
  meta: {},
  isLoading: false,
  error: null,
};

export const giphyReducer = (state = initialState, action) => {
  switch (action.type) {

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + FULFILLED:
      const { data, pagination, meta } = action.payload.data;

      return {
        ...state,
        data,
        pagination,
        meta,
        isLoading: false,
        error: null,
      };

    case GIPHY_ACTION_TYPES.GIPHY_SEARCH + '_' + REJECTED:
      return {
        ...initialState,
        error: null,
      };

    default:
      return state;
  }
};
