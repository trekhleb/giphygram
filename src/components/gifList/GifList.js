import React from 'react';
import PropTypes from 'prop-types';
import { GifItem } from '../gifItem/GifItem';

export class GifList extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    gifs: [],
  };

  render() {
    const {gifs} = this.props;

    const gifsElements = gifs.map((gif) => {
      return (
        <GifItem gif={gif} key={gif.id}/>
      );
    });

    return (
      <div>
        {gifsElements}
      </div>
    );
  }
}
