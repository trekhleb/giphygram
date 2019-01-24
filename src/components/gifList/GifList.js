import React from 'react';
import PropTypes from 'prop-types';
import { GifItem } from '../gifItem/GifItem';
import { Spinner } from '../shared/spinner/Spinner';

export class GifList extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
  };

  static defaultProps = {
    gifs: [],
    isLoading: false,
    isFetchingMore: false,
  };

  render() {
    const {gifs, isLoading, isFetchingMore} = this.props;

    if (isLoading) {
      return <Spinner/>;
    }

    const gifsElements = gifs.map((gif) => {
      return (
        <GifItem gif={gif} key={gif.id}/>
      );
    });

    const fetchingMoreLoader = isFetchingMore ? <Spinner/> : null;

    return (
      <div>
        {gifsElements}
        {fetchingMoreLoader}
      </div>
    );
  }
}
