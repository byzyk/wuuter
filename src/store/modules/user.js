// @flow

const LOGIN = 'app/user/LOGIN';

export default function user(state: any = 'Opop', action: any = {}) {
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
