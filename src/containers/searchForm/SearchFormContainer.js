import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { search, searchReset } from '../../actions/searchActions';
import { updateSearchQuery } from '../../actions/searchParamsActions';
import { getSearchParamsFromState } from '../../reducers/searchParamsReducer';

class SearchFormDisconnected extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    searchReset: PropTypes.func.isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    query: PropTypes.string,
  };

  static defaultProps = {
    query: '',
  };

  onSearchSubmit = (query) => {
    const { search: searchCallback } = this.props;
    searchCallback({ query });
  };

  onSearchUpdate = (query) => {
    const { updateSearchQuery: updateSearchQueryCallback } = this.props;
    updateSearchQueryCallback(query);
  };

  onSearchReset = () => {
    const { searchReset: searchResetCallback } = this.props;
    searchResetCallback();
  };

  render() {
    const { query } = this.props;

    return (
      <SearchForm
        query={query}
        onSearchSubmit={this.onSearchSubmit}
        onSearchUpdate={this.onSearchUpdate}
        onSearchReset={this.onSearchReset}
      />
    );
  }
}

const mapStateToProps = state => ({
  query: getSearchParamsFromState(state).query,
});

const mapDispatchToProps = {
  search,
  searchReset,
  updateSearchQuery,
};

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormDisconnected);
