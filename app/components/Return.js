import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './Return.css';

export default class Return extends Component {
  render() {
    return (
      <Link to="/">
        <div className={style.returnContainer}>
          <i className="fa fa-arrow-left fa-3x" /> <h3 className={style.returnButton}> Retournee</h3>
        </div>
      </Link>
    );
  }
};
