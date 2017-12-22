export const USER_SIGNIN = 'app/user/SIGNIN';
export const USER_SIGNOUT = 'app/user/SIGNOUT';

const initialState = {};

export default (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case USER_SIGNIN:
      return { ...action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export { userSignIn, userSignOut } from './actions';
