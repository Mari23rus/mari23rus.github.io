import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: '',
      currentValue: '',
      currentOperation: undefined,
      result: undefined
    }
    // this.handleClickNumber = this.handleClick.bind(this);
    // this.handleClickOperation = this.handleClickOperation.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickEquals = this.handleClickEquals.bind(this);
  }

  handleClickNumber = (e) => {
    if (this.state.currentOperation) {
      this.setState({
        currentValue: this.state.currentValue + e.target.innerText,
        formula: this.state.formula + this.state.currentOperation,
        currentOperation: undefined
      })
    } else if ((this.state.currentValue.indexOf('.') !== -1 && e.target.innerText === '.') || 
              (this.state.currentValue === '0' && e.target.innerText === '0')) {
      return;
    } else {
      this.setState({
        currentValue: this.state.currentValue + e.target.innerText
      })
    }
  }

  handleClickOperation = (e) => {
    if (this.state.currentValue !== '') {
      this.setState({
        formula: this.state.formula + this.state.currentValue,
        currentOperation: e.target.innerText,
        currentValue: ''
      })
    } else {
      this.setState({
        currentOperation: e.target.innerText
      })
    }
    
  }

  handleClickClear(){
    this.setState({
      formula: '',
      currentValue: '',
      currentOperation: undefined,
      result: undefined
    })
  }

  handleClickEquals() {
    let formula = this.state.formula;
    if (this.state.currentValue !== '') {
      formula += this.state.currentValue;
      this.setState({
        formula: formula,
        currentValue: ''
      })

    }
    try {
      const result = eval(formula);
      if (typeof result == 'number') {
        this.setState({
          formula: '',
          currentValue: round(result, 5).toString(),
          result: round(result, 5).toString()
        })
      }
    } catch(err) {
      this.setState({
        currentValue: '',
        formula: '',
        result: 'ERR'
      })
    }
  }

  render() {
    let operations = this.state.formula;
    if (this.state.currentOperation) operations += this.state.currentOperation;
    let value = this.state.currentValue == '' ? 0 : this.state.currentValue;

    return (
      <div id="app">
        <div id="display">
          <div className="output">{operations}</div>
          <div className="output"><span className="result">{value}</span></div>
        </div>
        <div id="clear" className="btn" onClick={this.handleClickClear}>AC</div>
        <div id="add" className="btn ops" onClick={this.handleClickOperation}>+</div>
        <div id="subtract" className="btn ops" onClick={this.handleClickOperation}>-</div>
        <div id="seven" className="btn" onClick={this.handleClickNumber}>7</div>
        <div id="eight" className="btn" onClick={this.handleClickNumber}>8</div>
        <div id="nine" className="btn" onClick={this.handleClickNumber}>9</div>
        <div id="multiply" className="btn ops" onClick={this.handleClickOperation}>*</div>
        <div id="four" className="btn" onClick={this.handleClickNumber}>4</div>
        <div id="five" className="btn" onClick={this.handleClickNumber}>5</div>
        <div id="six" className="btn" onClick={this.handleClickNumber}>6</div>
        <div id="divide" className="btn ops" onClick={this.handleClickOperation}>/</div>
        <div id="one" className="btn" onClick={this.handleClickNumber}>1</div>
        <div id="two" className="btn" onClick={this.handleClickNumber}>2</div>
        <div id="three" className="btn" onClick={this.handleClickNumber}>3</div>
        <div id="equals" className="btn ops" onClick={this.handleClickEquals}>=</div>
        <div id="zero" className="btn" onClick={this.handleClickNumber}>0</div>
        <div id="decimal" className="btn" onClick={this.handleClickNumber}>.</div>
      </div>
    );
  }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export default App;
