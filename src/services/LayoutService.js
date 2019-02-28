// Set of screen sizes that app is supporting.
export const SCREEN_SIZES = {
  xl: { id: 'xl', mediaQuery: '(min-width: 1200px)' },
  lg: { id: 'lg', mediaQuery: '(max-width: 1200px) and (min-width: 960px)' },
  md: { id: 'md', mediaQuery: '(max-width: 950px) and (min-width: 720px)' },
  sm: { id: 'sm', mediaQuery: '(max-width: 720px) and (min-width: 540px)' },
  xs: { id: 'xs', mediaQuery: '(max-width: 540px)' },
};

// Supported number of columns in 12-column templates.
export const SUPPORTED_COLUMNS_NUMS = [1, 2, 3, 4, 6, 12];

export const DEFAULT_COLUMNS_NUM = 3;

export const TOTAL_NUMBER_OF_LAYOUT_COLUMNS = 12;

export class LayoutService {
  /**
   * Get default number of columns for 12-column template depending on screen size.
   * @param {string} screenSize
   * @return {number}
   */
  static screenSizeToColumns(screenSize) {
    switch (screenSize) {
      case SCREEN_SIZES.xs.id:
        return 1;

      case SCREEN_SIZES.sm.id:
      case SCREEN_SIZES.md.id:
        return 3;

      case SCREEN_SIZES.lg.id:
      case SCREEN_SIZES.xl.id:
        return 4;

      default:
        return DEFAULT_COLUMNS_NUM;
    }
  }

  /**
   * Chooses the number of layout columns from manual and automatic one.
   * @param {?number} responsiveColumnsNum - number of layout columns according to window size
   * @param {?number} manualColumnsNum - number of layout columns according to user selection.
   * @return {number}
   */
  static choseColumnsNum(responsiveColumnsNum, manualColumnsNum) {
    // Manual column selection has higher priority than automatic columns number
    // calculated based on window size.
    return manualColumnsNum || responsiveColumnsNum;
  }
}
