import React from 'react';
import { GifItem } from '../gifItem/GifItem';

export class GifList extends React.Component {
  render() {
    return (
      <div>
        Gif List
        <GifItem/>
      </div>
    );
  }
}
