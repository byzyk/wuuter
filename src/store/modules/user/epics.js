// @flow

import firebase from 'react-native-firebase';
import { SIGNIN_REQUEST, signInSuccess } from './';

export const signInEpic = (action$: any, { dispatch }: any) => {
  return action$.ofType(SIGNIN_REQUEST).map(action => {
    const { email, password } = action.payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(signInSuccess(user));
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
              // this.showError(error.userInfo.NSLocalizedDescription);
            });
        } else {
          // this.showError(error.userInfo.NSLocalizedDescription);
        }
      });
    return true;
  });
};
