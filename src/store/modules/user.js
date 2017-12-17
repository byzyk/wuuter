export const SIGNIN = 'app/user/SIGNIN';
export const SIGNOUT = 'app/user/SIGNOUT';

const initialState = {};

export const user = (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case SIGNIN:
      return { ...action.payload };
    case SIGNOUT:
      return {};
    default:
      return state;
  }
};

export function userSignIn(payload) {
  return {
    type: SIGNIN,
    payload,
  };
}

export function userSignOut() {
  return {
    type: SIGNOUT,
  };
}
