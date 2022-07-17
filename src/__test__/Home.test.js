import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Testing the Home', () => {
  it('Home is rendered', () => {
    const home = renderer
      .create(<BrowserRouter><Home /></BrowserRouter>)
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
