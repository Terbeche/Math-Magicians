import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('Testing the Home', () => {
  it('Calculator is rendered', () => {
    const calculator = renderer
      .create(<BrowserRouter><Calculator /></BrowserRouter>)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});
