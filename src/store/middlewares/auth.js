// @flow

import { navigateSignIn } from '@modules/nav';
import { ROUTE_SIGNIN } from '@routes/routes';
import { SIGNIN } from '@modules/user';

const noAuthRoutes = [ROUTE_SIGNIN];

export const auth = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (typeof action === 'object' && action.hasOwnProperty('type')) {
    if (noAuthRoutes.includes(action.routeName) || action.type === SIGNIN) {
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
