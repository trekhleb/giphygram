import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchSummary } from '../../components/searchSummary/SearchSummary';
import { getSearchResultsFromState } from '../../reducers/searchResultsReducer';

export class SearchSummaryContainer extends React.Component {
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
  const searchResults = getSearchResultsFromState(state);
  let totalCount = null;

  if (
    searchResults.isLoading === false
    && searchResults.pagination
    && Object.prototype.hasOwnProperty.call(searchResults.pagination, 'total_count')
  ) {
    totalCount = searchResults.pagination.total_count;
  }

  return {
    total: totalCount,
  };
};

export default connect(mapStateToProps)(SearchSummaryContainer);
