import React from 'react';
import { render } from 'react-dom';

import { store } from './store';

import Root from './components/Root';

console.log(store.getState());

render(
  <Root store={store} />,
  document.getElementById('root')
);
