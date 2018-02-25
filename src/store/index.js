import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import { notesApp } from '../reducers';

export const store = createStore(notesApp, applyMiddleware(thunkMiddleware));