import {
  layoutReducer,
  defaultLayoutSetting,
  getLayoutFromState,
} from '../layoutReducer';
import { LAYOUT_ACTION_TYPES } from '../../actions/layoutActions';

describe('layoutReducer', () => {
  it('should generate default state correctly', () => {
    const state = defaultLayoutSetting;
    const action = {
      type: 'unknown',
      payload: null,
    };
    expect(layoutReducer(state, action)).toEqual(defaultLayoutSetting);
  });

  it('should extract params from state correctly', () => {
    const state = {
      layout: 42,
    };
    expect(getLayoutFromState(state)).toBe(42);
  });

  it('should set layout size', () => {
    const state = defaultLayoutSetting;
    const action = {
      type: LAYOUT_ACTION_TYPES.RESIZE,
      payload: 'sm',
    };
    expect(layoutReducer(state, action).size).toEqual('sm');
  });

  it('should set columns numb correctly', () => {
    const state = defaultLayoutSetting;
    const action = {
      type: LAYOUT_ACTION_TYPES.SET_COLUMNS_NUM,
      payload: 4,
    };
    expect(layoutReducer(state, action).manualColumnsNum).toBe(4);
  });
});
