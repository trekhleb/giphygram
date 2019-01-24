import React from 'react';
import { SearchForm } from '../searchForm/SearchForm';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">GiphyGram</a>
        <SearchForm/>
      </nav>
    );
  }
}
