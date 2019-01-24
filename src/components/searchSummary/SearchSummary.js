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

    if (total === null) {
      return null;
    }

    return (
      <small>
        Total results: <span className="badge badge-dark">{total}</span>
      </small>
    );
  }
}
