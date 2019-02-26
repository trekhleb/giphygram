import React from 'react';
import SearchResultsContainerConnected from '../../containers/searchResultsContainer/SearchResultsContainer';
import SearchSummaryContainerConnected from '../../containers/searchSummaryContainer/SearchSummaryContainer';

export class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <SearchSummaryContainerConnected />
        <SearchResultsContainerConnected />
      </div>
    );
  }
}
