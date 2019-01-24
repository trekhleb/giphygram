import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchSummary } from '../../components/searchSummary/SearchSummary';

class SearchSummaryDisconnected extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  render() {
    const {total} = this.props;

    return (
      <SearchSummary total={total}/>
    );
  }
}

const mapStateToProps = (state) => {
    let total_count = null;

    if (
      state.giphy.pagination &&
      state.giphy.pagination.hasOwnProperty('total_count') &&
      state.search.query &&
      state.search.query.length
    ) {
      total_count = state.giphy.pagination.total_count;
    }

    return {
      total: total_count
    };
};

export const SearchSummaryContainer = connect(mapStateToProps)(SearchSummaryDisconnected);
