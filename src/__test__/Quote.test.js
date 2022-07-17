import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../components/Quote';

describe('Testing the Quote', () => {
  it('Home is rendered', () => {
    const quote = renderer
      .create(<BrowserRouter><Quote /></BrowserRouter>)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});
