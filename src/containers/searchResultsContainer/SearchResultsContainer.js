import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchResults } from '../../components/searchResults/SearchResults';
import { InfiniteScroll } from '../../components/shared/infiniteScroll/InfiniteScroll';
import { Spinner } from '../../components/shared/spinner/Spinner';
import { searchMore } from '../../actions/searchActions';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';

export class SearchResultsContainer extends React.Component {
  static propTypes = {
    searchItems: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    searchMore: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchItems: [],
    isLoading: false,
    isFetchingMore: false,
  };

  onFetchMore = () => {
    const { isFetchingMore, searchMore: searchMoreCallback } = this.props;

    if (!isFetchingMore) {
      searchMoreCallback();
    }
  };

  render() {
    const { searchItems, isLoading, isFetchingMore } = this.props;

    const fetchMoreSpinner = isFetchingMore ? <Spinner /> : null;

    return (
      <InfiniteScroll onFetchMore={this.onFetchMore}>
        <SearchResults searchItems={searchItems} isLoading={isLoading} />
        {fetchMoreSpinner}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  const searchResults = getSearchResultsFromState(state);

  return {
    searchItems: searchResults.data || [],
    isLoading: searchResults.isLoading || false,
    isFetchingMore: searchResults.isFetchingMore || false,
  };
};

const mapDispatchToProps = {
  searchMore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsContainer);
