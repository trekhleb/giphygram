import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

export class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="container giphygram-container">
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
