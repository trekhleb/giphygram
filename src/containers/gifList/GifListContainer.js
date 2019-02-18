import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GifList } from '../../components/gifList/GifList';
import { InfiniteScroll } from '../../components/shared/infiniteScroll/InfiniteScroll';
import { Spinner } from '../../components/shared/spinner/Spinner';
import { giphySearchMore } from '../../actions/giphyActions';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';

class GifListDisconnected extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    giphySearchMore: PropTypes.func.isRequired,
  };

  static defaultProps = {
    gifs: [],
    isLoading: false,
    isFetchingMore: false,
  };

  onFetchMore = () => {
    const { isFetchingMore, giphySearchMore: giphySearchMoreCallback } = this.props;

    if (!isFetchingMore) {
      giphySearchMoreCallback();
    }
  };

  render() {
    const { gifs, isLoading, isFetchingMore } = this.props;

    const fetchMoreSpinner = isFetchingMore ? <Spinner /> : null;

    return (
      <InfiniteScroll onFetchMore={this.onFetchMore}>
        <GifList gifs={gifs} isLoading={isLoading} />
        {fetchMoreSpinner}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (state) => {
  const searchResults = getSearchResultsFromState(state);

  return {
    gifs: searchResults.data || [],
    isLoading: searchResults.isLoading || false,
    isFetchingMore: searchResults.isFetchingMore || false,
  };
};

const mapDispatchToProps = {
  giphySearchMore,
};

export const GifListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifListDisconnected);
