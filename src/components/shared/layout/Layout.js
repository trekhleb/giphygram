import React from 'react';
import PropTypes from 'prop-types';

export class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  render() {
    const {children} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
