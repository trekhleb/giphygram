import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { search, searchReset } from '../../actions/searchActions';
import { updateSearchQuery } from '../../actions/searchParamsActions';
import { getSearchParamsFromState } from '../../reducers/searchParamsReducer';
import { RouterService } from '../../services/RouterService';

export class SearchFormContainer extends React.Component {
  static propTypes = {
    routerService: PropTypes.instanceOf(RouterService).isRequired,
    search: PropTypes.func.isRequired,
    searchReset: PropTypes.func.isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    query: PropTypes.string,
  };

  static defaultProps = {
    query: '',
  };

  onSearchSubmit = (query) => {
    const { search: searchCallback, routerService } = this.props;

    // Update store.
    searchCallback({ query });

    // Update URL.
    routerService.pushSearchQuery(query);
  };

  onSearchUpdate = (query) => {
    const { updateSearchQuery: updateSearchQueryCallback } = this.props;

    // Update store.
    updateSearchQueryCallback(query);
  };

  onSearchReset = () => {
    const { searchReset: searchResetCallback, routerService } = this.props;

    // Update store.
    searchResetCallback();

    // Update URL.
    routerService.pushSearchQuery();
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

const mapStateToProps = (state, props) => ({
  routerService: new RouterService(props.history, props.location),
  query: getSearchParamsFromState(state).query,
});

const mapDispatchToProps = {
  search,
  searchReset,
  updateSearchQuery,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormContainer));
