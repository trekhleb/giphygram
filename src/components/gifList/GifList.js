import React from 'react';
import PropTypes from 'prop-types';
import { GifItem } from '../gifItem/GifItem';
import { Spinner } from '../shared/spinner/Spinner';

export class GifList extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    gifs: [],
    isLoading: false,
  };

  render() {
    const { gifs, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    const gifsElements = gifs.map(gif => (
      <GifItem gif={gif} key={gif.id} />
    ));

    return (
      <div className="mb-3">
        {gifsElements}
      </div>
    );
  }
}
