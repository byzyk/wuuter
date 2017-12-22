// @flow

import { ofType } from 'redux-observable';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from './';

export const signInEpic = (action$: any) =>
  action$.ofType(SIGNIN_REQUEST).mapTo(SIGNIN_SUCCESS);
