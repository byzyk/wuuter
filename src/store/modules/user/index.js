export const SIGNIN_REQUEST = 'app/user/SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'app/user/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'app/user/SIGNIN_FAILURE';
export const SIGNOUT = 'app/user/SIGNOUT';

const initialState = {};

export default (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...action.payload };
    case SIGNOUT:
      return {};
    default:
      return state;
  }
};

export function signInRequest(payload) {
  return {
    type: SIGNIN_REQUEST,
    payload,
  };
}

export function signInSuccess(user) {
  const { uid, email } = user;
  const payload = {
    uid,
    email,
  };
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
}

export function signOut() {
  return {
    type: SIGNOUT,
  };
}
