import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { giphySearch } from '../../actions/giphyActions';
import { updateSearchQuery } from '../../actions/searchActions';

class SearchFormDisconnected extends React.Component {
  static propTypes = {
    giphySearch: PropTypes.func.isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    query: PropTypes.string,
  };

  onSearch = (query) => {
    const { giphySearch } = this.props;
    giphySearch({query});
  };

  onSearchUpdate = (query) => {
    const { updateSearchQuery } = this.props;
    updateSearchQuery(query);
  };

  render() {
    const {query} = this.props;

    return (
      <SearchForm
        query={query}
        onSearch={this.onSearch}
        onSearchUpdate={this.onSearchUpdate}
      />
    );
  }
}

const mapStateToProps = (state) => {
    return {
      query: state.search.query,
    };
};

const mapDispatchToProps = {
  giphySearch,
  updateSearchQuery,
};

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormDisconnected);
