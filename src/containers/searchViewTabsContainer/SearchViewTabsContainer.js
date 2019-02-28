import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchViewTabs } from '../../components/searchViewTabs/SearchViewTabs';
import { getLayoutFromState } from '../../reducers/layoutReducer';
import { DEFAULT_COLUMNS_NUM, LayoutService, SUPPORTED_COLUMNS_NUMS } from '../../services/LayoutService';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';
import { setColumnsNum } from '../../actions/layoutActions';

export class SearchViewTabsContainer extends React.Component {
  static propTypes = {
    columnsNum: PropTypes.oneOf(SUPPORTED_COLUMNS_NUMS),
    isHidden: PropTypes.bool.isRequired,
    setColumnsNum: PropTypes.func.isRequired,
  };

  static defaultProps = {
    columnsNum: DEFAULT_COLUMNS_NUM,
  };

  onColumnsNumChange = (columnsNum) => {
    const { setColumnsNum: columnsNumCallback } = this.props;
    columnsNumCallback(columnsNum);
  };

  render() {
    const { columnsNum, isHidden } = this.props;

    if (!columnsNum || isHidden) {
      return null;
    }

    return (
      <SearchViewTabs columnsNum={columnsNum} onColumnsNumChange={this.onColumnsNumChange} />
    );
  }
}

const mapStateToProps = (state) => {
  // Extract data from state.
  const layout = getLayoutFromState(state);
  const searchResults = getSearchResultsFromState(state);

  // Calculate how many columns we need to display now according to window size.
  const responsiveColumnsNum = LayoutService.screenSizeToColumns(layout.size);

  // Check whether user has already selected preferred columns number.
  // Manual selection has higher priority that automatic one.
  const columnsNum = LayoutService.choseColumnsNum(
    responsiveColumnsNum,
    layout.manualColumnsNum,
  );

  // Decide whether we need to show layout buttons or not depending on search results.
  let isHidden = true;
  if (
    searchResults.isLoading === false
    && searchResults.pagination
    && Object.prototype.hasOwnProperty.call(searchResults.pagination, 'total_count')
    && searchResults.pagination.total_count
  ) {
    isHidden = false;
  }

  return {
    columnsNum,
    isHidden,
  };
};

const mapDispatchToProps = {
  setColumnsNum,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchViewTabsContainer);
