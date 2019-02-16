import React from 'react';
import { SearchFormContainer } from '../../../containers/searchForm/SearchFormContainer';
import './header.css';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center italic mt-5 mb-5 logo">
          GiphyGram
        </h1>
        <div className="mb-3">
          <SearchFormContainer />
        </div>
      </div>
    );
  }
}
