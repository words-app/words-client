import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import { store } from '../store';

import { AppContainer } from './App';

const Root = ({ store }) => (
  <Fabric>
    <Provider store={store}>
      <Router>
        <Route path="/:noteID?" component={AppContainer} />
      </Router>
    </Provider>
  </Fabric>
);

export default Root;
