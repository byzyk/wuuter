// @flow

import { navigateSignIn } from '@modules/nav';
import { ROUTE_SIGNIN } from '@routes/routes';

const noAuthRoutes = [ROUTE_SIGNIN];

export const auth = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (typeof action === 'object' && action.hasOwnProperty('type')) {
    if (noAuthRoutes.includes(action.routeName)) {
      next(action);
    } else {
      const state = getState();
      if (state.user) {
        next(action);
      } else {
        dispatch(navigateSignIn());
        console.log('AUTH: Access denied.');
      }
    }
  }
};
