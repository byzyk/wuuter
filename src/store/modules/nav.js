// @flow

import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '@routes';
import { ROUTE_HOME, ROUTE_SIGNIN } from '@routes/routes';

const { getStateForAction } = RootNavigator.router;

const initialState = null;

export const nav = (state: any = initialState, action: any) => {
  return getStateForAction(action, state) || state;
};

export function navigateHome() {
  return NavigationActions.navigate({ routeName: ROUTE_HOME });
}

export function navigateSignIn() {
  return NavigationActions.navigate({ routeName: ROUTE_SIGNIN });
}
