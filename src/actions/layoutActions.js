export const LAYOUT_ACTION_TYPES = {
  RESIZE: 'RESIZE',
  SET_COLUMNS_NUM: 'SET_COLUMNS_NUM',
};

/**
 * Resize layout automatically depending on the current window size.
 * @param {string} layoutSize
 */
export function layoutResize(layoutSize) {
  return {
    type: LAYOUT_ACTION_TYPES.RESIZE,
    payload: layoutSize,
  };
}

/**
 * Setup the number of layout columns manually.
 * @param {number} columnsNum
 */
export function setColumnsNum(columnsNum) {
  return {
    type: LAYOUT_ACTION_TYPES.SET_COLUMNS_NUM,
    payload: columnsNum,
  };
}
