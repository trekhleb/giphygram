import React from 'react';
import PropTypes from 'prop-types';
import { SearchItem } from '../searchItem/SearchItem';
import { Spinner } from '../shared/spinner/Spinner';
import { MasonryGrid } from '../shared/masonryGrid/MasonryGrid';

export class SearchResults extends React.Component {
  static propTypes = {
    searchItems: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    columnsNum: PropTypes.oneOf([1, 2, 3, 4, 6, 12]),
  };

  static defaultProps = {
    searchItems: [],
    isLoading: false,
    columnsNum: 3,
  };

  renderSearchItem = searchItem => (
    <SearchItem item={searchItem} key={searchItem.id} />
  );

  render() {
    const { searchItems, isLoading, columnsNum } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    const gridItems = searchItems.map(searchItem => ({
      height: parseInt(searchItem.images.fixed_width.height, 10),
      content: searchItem,
    }));

    return (
      <div className="mb-3">
        <MasonryGrid
          items={gridItems}
          renderItem={this.renderSearchItem}
          columnsNum={columnsNum}
        />
      </div>
    );
  }
}
