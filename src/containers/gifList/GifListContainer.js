import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GifList } from '../../components/gifList/GifList';

class GifListDisconnected extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
  };

  render() {
    const {gifs, isLoading} = this.props;

    return (
      <GifList gifs={gifs} isLoading={isLoading}/>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    gifs: store.giphy.data || [],
    isLoading: store.giphy.isLoading || false,
  };
};

export const GifListContainer = connect(mapStateToProps)(GifListDisconnected);
