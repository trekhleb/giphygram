import React from 'react';
import PropTypes from 'prop-types';

export class SearchSummary extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  static defaultProps = {
    total: 0,
  };

  render() {
    const {total} = this.props;

    if (!total) {
      return null;
    }

    return (
      <div>
        Total results: {total}
      </div>
    );
  }
}
