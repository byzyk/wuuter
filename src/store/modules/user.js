const LOGIN = 'app/user/LOGIN';

export default function user(state = 'Opop', action = {}) {
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
