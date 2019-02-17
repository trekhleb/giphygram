import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { giphySearch } from '../../actions/giphyActions';
import { updateSearchQuery } from '../../actions/searchParamsActions';

class SearchFormDisconnected extends React.Component {
  static propTypes = {
    giphySearch: PropTypes.func.isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    query: PropTypes.string,
  };

  static defaultProps = {
    query: '',
  };

  onSearchSubmit = (query) => {
    const { giphySearch: giphySearchCallback } = this.props;
    giphySearchCallback({ query });
  };

  onSearchUpdate = (query) => {
    const { updateSearchQuery: updateSearchQueryCallback } = this.props;
    updateSearchQueryCallback(query);
  };

  render() {
    const { query } = this.props;

    return (
      <SearchForm
        query={query}
        onSearchSubmit={this.onSearchSubmit}
        onSearchUpdate={this.onSearchUpdate}
      />
    );
  }
}

const mapStateToProps = state => ({
  query: state.searchParams.query,
});

const mapDispatchToProps = {
  giphySearch,
  updateSearchQuery,
};

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormDisconnected);
