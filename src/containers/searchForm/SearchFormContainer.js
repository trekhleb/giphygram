import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { giphySearch } from '../../actions/giphyActions';

class SearchFormDisconnected extends React.Component {
  static propTypes = {
    giphySearch: PropTypes.func.isRequired,
  };

  onSearch = (query) => {
    const { giphySearch } = this.props;
    giphySearch({query});
  };

  render() {
    return (
      <SearchForm onSearch={this.onSearch}/>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  giphySearch,
};

export const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormDisconnected);
