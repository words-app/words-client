import React from 'react';
import { render } from 'react-dom';

import { fetchNotes } from './actions';
import { store } from './store';

import Root from './components/Root';

import style from './scss/style.scss';

store.dispatch(fetchNotes());

render(
  <Root store={store} />,
  document.getElementById('root')
);
