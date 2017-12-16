// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '@store/reducers';
import { loggerMiddleware } from '@store/middlewares/logger';
import { authMiddleware } from '@store/middlewares/auth';

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(loggerMiddleware, authMiddleware),
);

export default store;
