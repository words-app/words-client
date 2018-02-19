import { createStore } from 'redux';

import { notesApp } from '../reducers';

export const store = createStore(notesApp);

console.log(store);