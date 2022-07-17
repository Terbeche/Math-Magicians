import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('Testing the NavBar', () => {
  it('NavBar is rendered', () => {
    const nav = renderer
      .create(<BrowserRouter><NavBar /></BrowserRouter>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
