import React from 'react';
import { SearchForm } from '../searchForm/SearchForm';
import { GifList } from '../gifList/GifList';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchForm/>
        <GifList/>
      </div>
    );
  }
}
