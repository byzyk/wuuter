// import firebase from 'react-native-firebase';
import { USER_SIGNIN, USER_SIGNOUT } from './';

// const DB_USERS = firebase.database().ref('/users');

export function userSignIn(user) {
  const { uid, email } = user._user;
  const payload = {
    uid,
    email,
  };

  // if (!this.checkUserExists(DB_USERS, uid)) {
  //   this.createNewUser(DB_USERS, userData);
  // }

  return {
    type: USER_SIGNIN,
    payload,
  };
}

export function userSignOut() {
  return {
    type: USER_SIGNOUT,
  };
}
