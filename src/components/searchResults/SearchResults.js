import React from 'react';
import PropTypes from 'prop-types';
import { SearchItem } from '../searchItem/SearchItem';
import { Spinner } from '../shared/spinner/Spinner';

export class SearchResults extends React.Component {
  static propTypes = {
    searchItems: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    searchItems: [],
    isLoading: false,
  };

  render() {
    const { searchItems, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    const searchItemsElements = searchItems.map(gifEntity => (
      <SearchItem item={gifEntity} key={gifEntity.id} />
    ));

    return (
      <div className="mb-3">
        {searchItemsElements}
      </div>
    );
  }
}
