/* eslint-disable jsx-a11y/label-has-associated-control */
import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleClick(e) {
    const operation = e.target.value;
    const result = calculate(this.state, operation);
    this.setState(result);
  }

  handleTextChange(e) {
    this.setState({
      total: e.target.value,
    });
  }

  render() {
    const { total, next } = this.state;

    return (
      <div id="calculator">
        <p id="result" onChange={this.handleTextChange}>{next || total || 0}</p>
        <button type="button" onClick={this.handleClick} value="AC">AC</button>
        <button type="button" onClick={this.handleClick} value="+/-">+/-</button>
        <button type="button" onClick={this.handleClick} value="%">%</button>
        <button className="operator" type="button" onClick={this.handleClick} value="÷">/</button>
        <button type="button" onClick={this.handleClick} value="7">7</button>
        <button type="button" onClick={this.handleClick} value="8">8</button>
        <button type="button" onClick={this.handleClick} value="9">9</button>
        <button className="operator" type="button" onClick={this.handleClick} value="x">x</button>
        <button type="button" onClick={this.handleClick} value="4">4</button>
        <button type="button" onClick={this.handleClick} value="5">5</button>
        <button type="button" onClick={this.handleClick} value="6">6</button>
        <button className="operator" type="button" onClick={this.handleClick} value="-">-</button>
        <button type="button" onClick={this.handleClick} value="1">1</button>
        <button type="button" onClick={this.handleClick} value="2">2</button>
        <button type="button" onClick={this.handleClick} value="3">3</button>
        <button className="operator" type="button" onClick={this.handleClick} value="+">+</button>
        <button id="zero-button" type="button" onClick={this.handleClick} value="0">0</button>
        <button type="button" onClick={this.handleClick} value=".">.</button>
        <button className="operator" type="button" onClick={this.handleClick} value="=">=</button>
      </div>
    );
  }
}

export default Calculator;
