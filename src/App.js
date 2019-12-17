import React from 'react';
import Result from './Result';
import Number from './Number';
import Operator from './Operator';

import './App.css';

class App extends React.Component {

  state = {
    result: ""
  }

  changeResult = (value) => {
    this.setState({
      result: this.state.result+value
    })
  }

  clearResult = () => {
    this.setState({
      result: ""
    })
  }

  render()
  {
    return (
      <div className="App">
        <Result result={this.state.result}/>
        <div className="NumberOperator">
          <Number result={this.changeResult} clearResult={this.clearResult} stateResult={this.state.result}/>
          <Operator result={this.changeResult} />
        </div>
      </div>
    );
  }
  
}

export default App;
