import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SearchPage } from './components/searchPage/SearchPage';
import { RouterService } from './services/RouterService';
import { updateSearchQuery } from './actions/searchParamsActions';
import { search } from './actions/searchActions';

export class Routes extends React.Component {
  static propTypes = {
    routerService: PropTypes.instanceOf(RouterService).isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      routerService,
      updateSearchQuery: searchQueryFromLocationCallback,
      search: searchCallback,
    } = this.props;

    // Check if search query has been submitted through the URL.
    // In case if search query is in URL we need to launch the search.
    const searchQueryFromLocation = routerService.getSearchQuery();
    if (searchQueryFromLocation) {
      // Update search form parameters.
      searchQueryFromLocationCallback(searchQueryFromLocation);
      // Launch the search and populate the state with search results.
      searchCallback({ query: searchQueryFromLocation });
    }
  }

  render() {
    // Currently we have only one route. But the next step of the App development might be to create
    // a dedicated pages for each GIF with additional details. Or to display most trending GIFs
    // on the /home and search results on the /search page.
    return (
      <Switch>
        <Route path="/" component={SearchPage} />
      </Switch>
    );
  }
}

const mapStateToProps = (state, props) => ({
  routerService: new RouterService(props.history, props.location),
});

const mapDispatchToProps = {
  updateSearchQuery,
  search,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Routes),
);
