import React from 'react';
import PropTypes from 'prop-types';
import './searchForm.css';

const inputMaxLength = 512;

export class SearchForm extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    onSearchSubmit: PropTypes.func,
    onSearchUpdate: PropTypes.func,
    onSearchReset: PropTypes.func,
  };

  static defaultProps = {
    query: '',
    onSearchSubmit: () => {},
    onSearchUpdate: () => {},
    onSearchReset: () => {},
  };

  onQueryChange = (event) => {
    const { onSearchUpdate } = this.props;
    const query = event.target.value;
    onSearchUpdate(query);
  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    const { onSearchSubmit, query } = this.props;
    // Don't fire onSearchSubmit callback when search query is empty.
    if (query) {
      onSearchSubmit(query);
    }
  };

  onSearchReset = (event) => {
    event.preventDefault();
    const { onSearchReset } = this.props;
    onSearchReset();
  };

  render() {
    const { query } = this.props;

    const resetElement = query && query.length ? (
      <div className="input-group-append">
        <button
          className="btn btn-light search-reset"
          type="button"
          onClick={this.onSearchReset}
          title="Reset search"
        >
          <span className="oi oi-x" />
        </button>
      </div>
    ) : null;

    return (
      <form className="form" onSubmit={this.onSearchSubmit}>
        <div className="input-group">
          <input
            className="form-control search-input"
            type="search"
            placeholder="Search for GIFs"
            value={query}
            onChange={this.onQueryChange}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            maxLength={inputMaxLength}
          />

          {resetElement}

          <div className="input-group-append">
            <button
              className="btn btn-dark search-submit"
              type="submit"
              onClick={this.onSearchSubmit}
              title="Search"
            >
              <span className="oi oi-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
