import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GifList } from '../../components/gifList/GifList';
import { InfiniteScroll } from '../../components/shared/infiniteScroll/InfiniteScroll';
import { Spinner } from '../../components/shared/spinner/Spinner';
import { searchMore } from '../../actions/searchActions';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';

class GifListDisconnected extends React.Component {
  static propTypes = {
    searchResults: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    searchMore: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchResults: [],
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
    const { searchResults, isLoading, isFetchingMore } = this.props;

    const fetchMoreSpinner = isFetchingMore ? <Spinner /> : null;

    return (
      <InfiniteScroll onFetchMore={this.onFetchMore}>
        <GifList gifs={searchResults} isLoading={isLoading} />
        {fetchMoreSpinner}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  const searchResults = getSearchResultsFromState(state);

  return {
    searchResults: searchResults.data || [],
    isLoading: searchResults.isLoading || false,
    isFetchingMore: searchResults.isFetchingMore || false,
  };
};

const mapDispatchToProps = {
  searchMore,
};

export const GifListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifListDisconnected);
