import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GifList } from '../../components/gifList/GifList';

class GifListDisconnected extends React.Component {
  static propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const {gifs} = this.props;

    return (
      <GifList gifs={gifs}/>
    );
  }
}

const mapStateToProps = (store) => {
  const gifs = store.giphy.data || [];
  return {gifs};
};

export const GifListContainer = connect(mapStateToProps)(GifListDisconnected);
