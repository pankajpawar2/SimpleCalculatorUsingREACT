import React, { Component } from 'react';

import styles from './Number.module.css'

let buttons = [1,2,3,4,5,6,7,8,9,0,"Clear","="];

export class Number extends Component {
  
  receiveInput = (event) => {
    event.preventDefault();
    this.props.result(event.target.value);
  }

  calcFinalResult = (num1,num2,operator) => {
    let result = undefined;

    switch (operator)
  {
    case "+":
    result = parseInt(num1) + parseInt(num2);
    break;

    case "-":
    result = num1 - num2;
    break;

    case "*":
    result = num1 * num2;
    break;

    case "/":
    result = num1 / num2;
    break;
  }

  return result;

  }

  calcResult = (event) => {
    event.preventDefault();
    let newArray = Array.from(this.props.stateResult);
    const operator = newArray.findIndex(element => {
      return isNaN(element)
    });

    const num1 = newArray.slice(0,operator).join('');
    const num2 = newArray.slice(operator+1).join('');

    this.props.result(event.target.value+this.calcFinalResult(num1,num2,newArray[operator]));
    
  }

  clearInput = (event) => {
    event.preventDefault();
    this.props.clearResult();
  }

  renderNumbers = () => {
    return buttons.map((button,index) => {
      if(button === "Clear"){
        return <button className={styles.Mybutton} onClick={this.clearInput}>{button}</button>
      }
      if(button !== "=")
      {
       return <button className={styles.Mybutton} value={button} onClick={this.receiveInput}>{button}</button>
      }
      else
      {
       return <button className={styles.Mybutton} value={button} onClick={this.calcResult}>{button}</button>
      }
    })
  }

  render() {
    return (
      <div className={styles.Numberdiv}>
       {this.renderNumbers()}
      </div>
    )
  }
}

export default Number
