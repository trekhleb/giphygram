import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GifList } from '../../components/gifList/GifList';
import { InfiniteScroll } from '../../components/shared/infiniteScroll/InfiniteScroll';
import { Spinner } from '../../components/shared/spinner/Spinner';
import { giphySearchMore } from '../../actions/giphyActions';

class GifListDisconnected extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    giphySearchMore: PropTypes.func.isRequired,
  };

  onFetchMore = () => {
    const {isFetchingMore, giphySearchMore} = this.props;

    if (!isFetchingMore) {
      giphySearchMore();
    }
  };

  render() {
    const {gifs, isLoading, isFetchingMore} = this.props;

    const fetchMoreSpinner = isFetchingMore ? <Spinner/> : null;

    return (
      <InfiniteScroll onFetchMore={this.onFetchMore}>
        <GifList gifs={gifs} isLoading={isLoading}/>
        {fetchMoreSpinner}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    gifs: store.giphy.data || [],
    isLoading: store.giphy.isLoading || false,
    isFetchingMore: store.giphy.isFetchingMore || false,
  };
};

const mapDispatchToProps = {
  giphySearchMore,
};

export const GifListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifListDisconnected);
