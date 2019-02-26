import React from 'react';
import PropTypes from 'prop-types';

const totalNumberOfColumns = 12;

export class MasonryGrid extends React.Component {
  static propTypes = {
    renderItem: PropTypes.func.isRequired,
    columnsNum: PropTypes.oneOf([1, 2, 3, 4, 6, 12]),
    items: PropTypes.arrayOf(PropTypes.shape({
      height: PropTypes.number,
      content: PropTypes.object,
    })),
  };

  static defaultProps = {
    items: [],
    columnsNum: 3,
  };

  render() {
    const { items, columnsNum, renderItem } = this.props;

    // Array that will store the height of each column.
    // It is used to keep column heights similar.
    const columnsSizes = new Array(columnsNum).fill(0);

    // Array that will store items that are split by columns according to their heights.
    const itemsPartitions = new Array(columnsNum)
      .fill(null)
      .map(() => []);

    // Fill partitions with items.
    items.forEach((item) => {
      // Get next smallest column to place the icon into.
      const itemColumnIndex = columnsSizes.indexOf(Math.min(...columnsSizes));
      // Increase the size of the column by item height.
      columnsSizes[itemColumnIndex] += item.height;
      // Put item to the proper partition.
      itemsPartitions[itemColumnIndex].push(item.content);
    });

    // Generate columns with search items inside.
    const columns = itemsPartitions.map((partition, partitionIndex) => {
      /* eslint-disable react/no-array-index-key */

      // Calculate Bootstrap class depending on the columns num.
      const columnClass = `col-${totalNumberOfColumns / columnsNum}`;

      // Generate column entities.
      const columnElements = partition.map(
        (item, index) => renderItem(item, index),
      );

      // Wrap column entities into column wrapper.
      return (
        <div className={columnClass} key={partitionIndex}>
          {columnElements}
        </div>
      );
    });

    return (
      <div className="row">
        {columns}
      </div>
    );
  }
}
