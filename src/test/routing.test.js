import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../Redux/Store';

import Home from '../component/Home';
import Nav from '../component/Nav';

describe('Nav renders correctly', () => {
  test('Renders nav Correctly', () => {
    const nav = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });
});

describe('home renders correctly', () => {
  test('Renders home Correctly', () => {
    const home = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});
