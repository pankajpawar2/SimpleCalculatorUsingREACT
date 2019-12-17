import React from 'react';
import styles from './Operator.module.css'

let operators = ["/","*","-","+"];



class Operator extends React.Component {

  receiveOperator = (event) => {
    event.preventDefault();
    this.props.result(event.target.value);
  }

  render()
  {
    return (
      <div className={styles.Operatordiv}>
         {operators.map((operator,index) => {
           return <button className={styles.Mybutton} value={operator} onClick={this.receiveOperator}>{operator}</button>
         })}
        </div>
    )
  }
  
}

export default Operator;