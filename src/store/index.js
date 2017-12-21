// @flow

import '@store/middlewares/reactotron';
import { combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import Reactotron from 'reactotron-react-native';
import * as reducers from '@store/reducers';
import { auth } from '@store/middlewares/auth';

const isDebug = typeof atob !== 'undefined';
// FIXME: refactor this
// just to make app running without debugger enabled
// eslint-disable-next-line
if (!isDebug || __DEV__) {
  // $FlowExpectedError
  console.log = function() {};

  // $FlowExpectedError
  console.log = Reactotron.log;
}

const store = Reactotron.createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(promiseMiddleware, auth),
);

export default store;
