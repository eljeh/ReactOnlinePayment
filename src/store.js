import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const middleware = [
  createLogger(),
  thunk
];

/* eslint-disable no-underscore-dangle */
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducers, enhancers(applyMiddleware(...middleware)));

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers'); // eslint-disable-line global-require
    store.replaceReducer(nextReducer);
  });
}

export default store;
