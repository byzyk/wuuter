// @flow

import { ROUTE_LOGIN } from '@routes/routes';
import { USER_SIGNIN } from '@modules/user';

const allowedRoutes = [ROUTE_LOGIN];
const allowedActions = [USER_SIGNIN];

export const auth = ({ getState }: any) => (next: any) => (action: any) => {
  if (typeof action === 'object' && action.hasOwnProperty('type')) {
    if (
      allowedRoutes.includes(action.routeName) ||
      allowedActions.includes(action.type)
    ) {
      next(action);
    } else {
      const state = getState();
      if (state.user.uid) {
        next(action);
      } else {
        console.log('AUTH: Access denied.');
      }
    }
  }
};
