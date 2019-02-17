import React from 'react';
import PropTypes from 'prop-types';
import './searchForm.css';

const inputMaxLength = 512;

export class SearchForm extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    onSearchSubmit: PropTypes.func,
    onSearchUpdate: PropTypes.func,
  };

  static defaultProps = {
    query: '',
    onSearchSubmit: () => {},
    onSearchUpdate: () => {},
  };

  onQueryChange = (event) => {
    const { onSearchUpdate } = this.props;
    const query = event.target.value;
    onSearchUpdate(query);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { onSearchSubmit, query } = this.props;
    onSearchSubmit(query);
  };

  render() {
    const { query } = this.props;

    return (
      <form className="form" onSubmit={this.onFormSubmit}>

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

          <div className="input-group-append">
            <button
              className="btn btn-dark"
              type="submit"
              onClick={this.onFormSubmit}
            >
              <span className="oi oi-magnifying-glass" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
