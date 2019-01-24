import React from 'react';
import { GifListContainer } from '../../containers/gifList/GifListContainer';
import { SearchSummaryContainer } from '../../containers/searchSummary/SearchSummaryContainer';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchSummaryContainer/>
        <GifListContainer/>
      </div>
    );
  }
}
