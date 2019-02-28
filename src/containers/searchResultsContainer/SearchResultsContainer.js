import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchResults } from '../../components/searchResults/SearchResults';
import { InfiniteScroll } from '../../components/shared/infiniteScroll/InfiniteScroll';
import { Spinner } from '../../components/shared/spinner/Spinner';
import { searchMore } from '../../actions/searchActions';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';
import { getLayoutFromState } from '../../reducers/layoutReducer';
import { DEFAULT_COLUMNS_NUM, LayoutService, SUPPORTED_COLUMNS_NUMS } from '../../services/LayoutService';

export class SearchResultsContainer extends React.Component {
  static propTypes = {
    searchItems: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    searchMore: PropTypes.func.isRequired,
    columnsNum: PropTypes.oneOf(SUPPORTED_COLUMNS_NUMS),
  };

  static defaultProps = {
    searchItems: [],
    isLoading: false,
    isFetchingMore: false,
    columnsNum: DEFAULT_COLUMNS_NUM,
  };

  onFetchMore = () => {
    const { isFetchingMore, isLoading, searchMore: searchMoreCallback } = this.props;

    if (!isFetchingMore && !isLoading) {
      searchMoreCallback();
    }
  };

  render() {
    const {
      searchItems, isLoading, isFetchingMore, columnsNum,
    } = this.props;

    const fetchMoreSpinner = isFetchingMore ? <Spinner /> : null;

    return (
      <InfiniteScroll onFetchMore={this.onFetchMore}>
        <SearchResults
          searchItems={searchItems}
          isLoading={isLoading}
          columnsNum={columnsNum}
        />
        {fetchMoreSpinner}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  const searchResults = getSearchResultsFromState(state);
  const layout = getLayoutFromState(state);

  // Decide how many columns to display based on responsive width and on user selection.
  const responsiveColumnsNum = LayoutService.screenSizeToColumns(layout.size);
  const columnsNum = LayoutService.choseColumnsNum(
    responsiveColumnsNum,
    layout.manualColumnsNum,
  );

  return {
    searchItems: searchResults.data || [],
    isLoading: searchResults.isLoading || false,
    isFetchingMore: searchResults.isFetchingMore || false,
    columnsNum,
  };
};

const mapDispatchToProps = {
  searchMore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsContainer);
