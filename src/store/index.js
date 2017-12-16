// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '@store/reducers';
import { logger } from '@store/middlewares/logger';
import { auth } from '@store/middlewares/auth';

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(logger, auth),
);

export default store;
