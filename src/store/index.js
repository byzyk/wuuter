// @flow

import '@store/middlewares/reactotron';
import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import Reactotron from 'reactotron-react-native';
import { auth } from '@store/middlewares/auth';
import { rootEpic, rootReducer } from '@modules/root';

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
  rootReducer,
  applyMiddleware(createEpicMiddleware(rootEpic), auth),
);

export default store;
