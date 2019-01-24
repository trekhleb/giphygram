import React from 'react';
import PropTypes from 'prop-types';

export class SearchSummary extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  static defaultProps = {
    total: null,
  };

  render() {
    const {total} = this.props;

    if (!total) {
      return null;
    }

    return (
      <div className="mb-3">
        <small>
          Total results: <span className="badge badge-dark">{total}</span>
        </small>
      </div>
    );
  }
}
