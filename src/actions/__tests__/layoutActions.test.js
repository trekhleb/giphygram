import {
  LAYOUT_ACTION_TYPES,
  layoutResize,
  setColumnsNum,
} from '../layoutActions';

describe('layoutActions', () => {
  it('should generate layoutResize', () => {
    const size = 'sm';
    const action = layoutResize(size);
    expect(action).toEqual({
      type: LAYOUT_ACTION_TYPES.RESIZE,
      payload: size,
    });
  });

  it('should generate setColumnsNum', () => {
    const columns = 3;
    const action = setColumnsNum(columns);
    expect(action).toEqual({
      type: LAYOUT_ACTION_TYPES.SET_COLUMNS_NUM,
      payload: columns,
    });
  });
});
