import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SearchFormContainer } from '../../../containers/searchForm/SearchFormContainer';
import './header.css';

class HeaderRaw extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center italic mt-5 mb-5 logo">
          <Link to="/" className="text-dark">
            GiphyGram
          </Link>
        </h1>
        <div className="mb-3">
          <SearchFormContainer />
        </div>
      </div>
    );
  }
}

export const Header = withRouter(HeaderRaw);
