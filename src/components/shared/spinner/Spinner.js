import React from 'react';
import './spinner.css';

export class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner-container mb-3">
        <div className="spinner"/>
      </div>
    );
  }
}
