import React from 'react';
import { gifItemPropType } from '../../types/giphy';

export class GifItem extends React.Component {
  static propTypes = {
    gif: gifItemPropType,
  };

  render() {
    const {gif} = this.props;

    return (
      <div className="card mb-3">
        <a href={gif.url}>
          <img
            border="0"
            className="card-img-top"
            src={gif.images.fixed_width.url}
            alt={gif.title}
            title={gif.title}
          />
        </a>
      </div>
    );
  }
}
