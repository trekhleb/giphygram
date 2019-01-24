import React from 'react';
import PropTypes from 'prop-types';

export class SearchForm extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    onSearch: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onQueryChange = (event) => {
    const query = event.target.value;
    this.setState({query});
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const {query} = this.state;
    const {onSearch} = this.props;

    onSearch(query);
  };

  render() {
    const {query} = this.state;

    return (
      <form className="form-inline" onSubmit={this.onFormSubmit}>

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
              className="btn btn-outline-light"
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
