// @flow

import { USER_SIGNIN, userSignInSuccess } from './';

export const userSignInEpic = (action$: any) =>
  action$
    .ofType(USER_SIGNIN)
    .map(payload => userSignInSuccess(payload.payload));
