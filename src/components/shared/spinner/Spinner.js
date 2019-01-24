import React from 'react';
import './spinner.css';

export class Spinner extends React.Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner"/>
      </div>
    );
  }
}
