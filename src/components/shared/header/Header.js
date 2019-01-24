import React from 'react';
import { SearchFormContainer } from '../../../containers/searchForm/SearchFormContainer';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="/">GiphyGram</a>
        <SearchFormContainer/>
      </nav>
    );
  }
}
