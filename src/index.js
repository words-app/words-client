import React from 'react';
import { render } from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import { fetchNotes } from './actions';
import { store } from './store';

import Root from './components/Root';

import style from './scss/style.scss';

initializeIcons();

store.dispatch(fetchNotes());

render(
  <Root store={store} />,
  document.getElementById('root')
);
