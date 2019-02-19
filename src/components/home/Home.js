import React from 'react';
import { SearchResultsContainer } from '../../containers/searchResultsContainer/SearchResultsContainer';
import { SearchSummaryContainer } from '../../containers/searchSummaryContainer/SearchSummaryContainer';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchSummaryContainer />
        <SearchResultsContainer />
      </div>
    );
  }
}
