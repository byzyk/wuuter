// @flow

import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '@routes';

const { getStateForAction } = RootNavigator.router;

const initialState = null;

export const nav = (state: any = initialState, action: any) => {
  return getStateForAction(action, state) || state;
};

export function navigateHome() {
  return NavigationActions.navigate({ routeName: 'Home' });
}

export function navigateSingIn() {
  return NavigationActions.navigate({ routeName: 'SignIn' });
}

export function navigateSignUp() {
  return NavigationActions.navigate({ routeName: 'SignUp' });
}
