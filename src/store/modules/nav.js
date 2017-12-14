// @flow

import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '@routes';

const { getStateForAction } = RootNavigator.router;
// const { BACK, INIT, NAVIGATE, RESET, SET_PARAMS, URI } = NavigationActions;

const initialState = null;

export default function nav(state: any = initialState, action: any) {
  const s = getStateForAction(action, state) || state;
  console.log('STATE:', s);
  return s;
}

export function navigateHome() {
  return NavigationActions.navigate({ routeName: 'Home' });
}

export function navigateSingIn() {
  return NavigationActions.navigate({ routeName: 'SignIn' });
}

export function navigateSignUp() {
  return NavigationActions.navigate({ routeName: 'SignUp' });
}
