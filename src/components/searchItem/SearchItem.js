import React from 'react';
import { gifEntityPropType } from '../../types/giphyTypes';

export class SearchItem extends React.Component {
  static propTypes = {
    item: gifEntityPropType.isRequired,
  };

  render() {
    const { item } = this.props;

    return (
      <div className="card mb-3">
        <a href={item.url}>
          <img
            border="0"
            className="card-img-top"
            src={item.images.fixed_width.url}
            alt={item.title}
            title={item.title}
          />
        </a>
      </div>
    );
  }
}
