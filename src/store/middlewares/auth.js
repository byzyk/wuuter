// @flow

import { NavigationActions } from 'react-navigation';

const { BACK, INIT, NAVIGATE, RESET, SET_PARAMS, URI } = NavigationActions;
const protectedNavActions = [BACK, INIT, NAVIGATE, RESET, SET_PARAMS, URI];

export const auth = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (typeof action === 'object' && protectedNavActions.includes(action.type)) {
    const state = getState();
    if (state.user) {
      next(action);
    } else {
      console.log('FUCK OFF');
    }
  }
};
