/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, React } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });
  // const { total, next } = this.state;

  const handleClick = (e) => {
    const operation = e.target.value;
    const result = calculate(state, operation);
    setState(result);
  };

  const handleTextChange = (e) => {
    setState({
      total: e.target.value,
    });
  };

  return (
    <div id="calculator">
      <p id="result" onChange={handleTextChange}>{state.next || state.total || 0}</p>
      <button type="button" onClick={handleClick} value="AC">AC</button>
      <button type="button" onClick={handleClick} value="+/-">+/-</button>
      <button type="button" onClick={handleClick} value="%">%</button>
      <button className="operator" type="button" onClick={handleClick} value="÷">/</button>
      <button type="button" onClick={handleClick} value="7">7</button>
      <button type="button" onClick={handleClick} value="8">8</button>
      <button type="button" onClick={handleClick} value="9">9</button>
      <button className="operator" type="button" onClick={handleClick} value="x">x</button>
      <button type="button" onClick={handleClick} value="4">4</button>
      <button type="button" onClick={handleClick} value="5">5</button>
      <button type="button" onClick={handleClick} value="6">6</button>
      <button className="operator" type="button" onClick={handleClick} value="-">-</button>
      <button type="button" onClick={handleClick} value="1">1</button>
      <button type="button" onClick={handleClick} value="2">2</button>
      <button type="button" onClick={handleClick} value="3">3</button>
      <button className="operator" type="button" onClick={handleClick} value="+">+</button>
      <button id="zero-button" type="button" onClick={handleClick} value="0">0</button>
      <button type="button" onClick={handleClick} value=".">.</button>
      <button className="operator" type="button" onClick={handleClick} value="=">=</button>
    </div>
  );
};

export default Calculator;
