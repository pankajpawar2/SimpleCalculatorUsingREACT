import React, { Component } from 'react';

import styles from './Result.module.css'

export class Result extends Component {

  render() {
    return (
      <div className={styles.Result}>
        <h2>Result:{this.props.result}</h2>
      </div>
    )
  }
}

export default Result
