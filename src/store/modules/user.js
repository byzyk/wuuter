export const SIGNIN = 'app/user/SIGNIN';

const initialState = null;

export const user = (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case SIGNIN:
      return { ...action.payload };
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
