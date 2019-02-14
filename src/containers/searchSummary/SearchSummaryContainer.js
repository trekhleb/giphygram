import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchSummary } from '../../components/searchSummary/SearchSummary';

class SearchSummaryDisconnected extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  static defaultProps = {
    total: 0,
  };

  render() {
    const { total } = this.props;

    return (
      <SearchSummary total={total} />
    );
  }
}

const mapStateToProps = (state) => {
  let totalCount = null;

  if (
    state.giphy.isLoading === false
    && state.giphy.pagination
    && Object.prototype.hasOwnProperty.call(state.giphy.pagination, 'total_count')
  ) {
    totalCount = state.giphy.pagination.total_count;
  }

  return {
    total: totalCount,
  };
};

export const SearchSummaryContainer = connect(mapStateToProps)(SearchSummaryDisconnected);
