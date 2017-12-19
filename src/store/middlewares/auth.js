// @flow

import { ROUTE_LOGIN } from '@routes/routes';
import { SIGNIN } from '@modules/user';

const noAuthRoutes = [ROUTE_LOGIN];

export const auth = ({ getState }: any) => (next: any) => (action: any) => {
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
