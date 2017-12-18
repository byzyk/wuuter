// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '@store/reducers';
import { logger } from '@store/middlewares/logger';
import { auth } from '@store/middlewares/auth';

const isDebug = typeof atob !== 'undefined';

// FIXME: refactor this
// just to make app running without debugger enabled
if (!isDebug) {
  // $FlowExpectedError
  console.log = function() {};
  // $FlowExpectedError
  console.groupCollapsed = function() {};
  // $FlowExpectedError
  console.groupEnd = function() {};
}

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(logger, auth),
);

export default store;
