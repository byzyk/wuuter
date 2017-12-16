// @flow

import { navigateSignIn } from '@modules/nav';
import { ROUTE_SIGNIN } from '@routes/routes';

export const auth = ({ getState, dispatch }: any) => (next: any) => (
  action: any,
) => {
  if (typeof action === 'object' && action.hasOwnProperty('type')) {
    if (action.routeName === ROUTE_SIGNIN) {
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
