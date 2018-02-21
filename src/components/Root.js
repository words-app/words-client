import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { store } from '../store';

import { AppContainer } from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:noteID?" component={AppContainer} />
    </Router>
  </Provider>
);

export default Root;