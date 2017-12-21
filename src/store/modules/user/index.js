export const USER_SIGNIN = 'app/user/SIGNIN';
export const USER_SIGNIN_SUCCESS = 'app/user/SIGNIN_SUCCESS';
export const USER_SIGNOUT = 'app/user/SIGNOUT';

const initialState = {};

export default (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      console.log('okok');
      return { ...action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export function userSignIn(payload) {
  return {
    type: USER_SIGNIN,
    payload,
  };
}

export function userSignInSuccess(payload) {
  return {
    type: USER_SIGNIN_SUCCESS,
    payload,
  };
}

export function userSignOut() {
  return {
    type: USER_SIGNOUT,
  };
}
