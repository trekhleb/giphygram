import { LayoutService } from '../LayoutService';

describe('LayoutService', () => {
  it('should pick correct number of columns for layout', () => {
    expect(LayoutService.choseColumnsNum(4, null)).toBe(4);
    expect(LayoutService.choseColumnsNum(4, 3)).toBe(3);
    expect(LayoutService.choseColumnsNum(null, 3)).toBe(3);
  });

  it('should correctly convert screen size to number of columns', () => {
    expect(LayoutService.screenSizeToColumns('xs')).toBe(1);
    expect(LayoutService.screenSizeToColumns('sm')).toBe(3);
    expect(LayoutService.screenSizeToColumns('md')).toBe(3);
    expect(LayoutService.screenSizeToColumns('lg')).toBe(4);
    expect(LayoutService.screenSizeToColumns('xl')).toBe(4);

    expect(LayoutService.screenSizeToColumns('unknown')).toBe(3);
  });
});
