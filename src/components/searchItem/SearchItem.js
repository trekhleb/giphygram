import React from 'react';
import { gifEntityPropType } from '../../types/giphyTypes';

export class SearchItem extends React.Component {
  static propTypes = {
    item: gifEntityPropType.isRequired,
  };

  render() {
    const { item } = this.props;

    return (
      <div className="w-100 mb-3">
        <a href={item.url}>
          <img
            className="w-100"
            border="0"
            src={item.images.fixed_width.url}
            alt={item.title}
            title={item.title}
          />
        </a>
      </div>
    );
  }
}
