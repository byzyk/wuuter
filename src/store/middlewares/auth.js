// @flow

import { NavigationActions } from 'react-navigation';

const { BACK, INIT, NAVIGATE, RESET, SET_PARAMS, URI } = NavigationActions;
const protectedNavActions = [BACK, INIT, NAVIGATE, RESET, SET_PARAMS, URI];

export const authMiddleware = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (typeof action === 'object' && protectedNavActions.includes(action.type)) {
    // todo
  }
  next(action);
};
