// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Bowling</h2>
          <Link to="/start">Commencer</Link><br />
          <Link to="/option">Options</Link><br />
          <Link to="/about">Apropos</Link>
        </div>
      </div>
    );
  }
}
