/**
 * @typedef LayoutState
 * @type {object}
 * @property {?string} size - screen size name (is being set automatically).
 * @property {?string} manualSize - screen size name (is being set manually).
 */

import { LAYOUT_ACTION_TYPES } from '../actions/layoutActions';

/**
 * @type {LayoutState}
 */
export const defaultLayoutSetting = {
  size: null,
  manualColumnsNum: null,
};

// Layout reducer is responsible for storing layout parameter like screen size etc.
export const layoutReducer = (state = defaultLayoutSetting, action) => {
  switch (action.type) {
    case LAYOUT_ACTION_TYPES.RESIZE:
      return { ...state, size: action.payload };

    case LAYOUT_ACTION_TYPES.SET_COLUMNS_NUM:
      return { ...state, manualColumnsNum: action.payload };

    default:
      return state;
  }
};

/**
 * Extracts layout parameters from the store.
 * This is a helper function that allows us to change store structure easily
 * without changing the components.
 *
 * @param {object} state
 * @return {LayoutState}
 */
export const getLayoutFromState = state => state.layout;
