import './Calculator.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div id="calculator">
        <p id="result">0</p>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="operator" type="button">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="operator" type="button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="operator" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="operator" type="button">+</button>
        <button id="zero-button" type="button">0</button>
        <button type="button">.</button>
        <button className="operator" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
