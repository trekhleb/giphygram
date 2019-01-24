import React from 'react';
import PropTypes from 'prop-types';

export class SearchForm extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func,
    onSearchUpdate: PropTypes.func,
  };

  static defaultProps = {
    query: '',
    onSearch: () => {},
    onSearchUpdate: () => {},
  };

  onQueryChange = (event) => {
    const {onSearchUpdate} = this.props;
    const query = event.target.value;
    onSearchUpdate(query);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const {onSearch, query} = this.props;

    onSearch(query);
  };

  render() {
    const {query} = this.props;

    return (
      <form className="form" onSubmit={this.onFormSubmit}>

        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search GIFs"
            value={query}
            onChange={this.onQueryChange}
          />

          <div className="input-group-append">
            <button
              className="btn btn-dark"
              type="submit"
              onClick={this.onFormSubmit}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
