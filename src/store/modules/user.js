// @flow

const LOGIN = 'app/user/LOGIN';

const initialState = {
  id: 'blablabla',
};

export default function user(state: any = initialState, action: any = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export function userLogin() {
  return {
    type: LOGIN,
  };
}
