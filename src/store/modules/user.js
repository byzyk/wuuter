// @flow

const LOGIN = 'app/user/LOGIN';

const initialState = {
  id: 'blablabla',
};

export const user = (state: any = null, action: any = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function userLogin() {
  return {
    type: LOGIN,
  };
}
