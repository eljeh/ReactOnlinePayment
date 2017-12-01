import { combineReducers } from 'redux';

import app from './app.reducer';
import bambora from './bambora.reducer';

export default combineReducers({ app, bambora });
