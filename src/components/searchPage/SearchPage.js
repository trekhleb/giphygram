import React from 'react';
import SearchResultsContainerConnected from '../../containers/searchResultsContainer/SearchResultsContainer';
import SearchSummaryContainerConnected from '../../containers/searchSummaryContainer/SearchSummaryContainer';
import SearchViewTabsContainerConnected from '../../containers/searchViewTabsContainer/SearchViewTabsContainer';

export class SearchPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <SearchSummaryContainerConnected />
          </div>
          <div className="col-6 text-right">
            <SearchViewTabsContainerConnected />
          </div>
        </div>
        <SearchResultsContainerConnected />
      </React.Fragment>
    );
  }
}
