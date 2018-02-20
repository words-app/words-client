import React from 'react';
import { render } from 'react-dom';

import { store } from './store';

import Root from './components/Root';

import { fetchNotes } from './actions';

// Log the initial state
console.log(store.getState())
 
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(fetchNotes());


render(
  <Root store={store} />,
  document.getElementById('root')
);
