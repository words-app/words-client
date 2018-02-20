import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

import { notesApp } from '../reducers';
import thunk from 'redux-thunk';

export const store = createStore(notesApp, applyMiddleware(logger, thunkMiddleware));