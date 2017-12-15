import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h3><i className="fa fa-arrow-left fa-3x" /> Retour</h3>
        </Link>
        <h2>About</h2>
      </div>
    );
  }
}
