import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '@routes';
import {
  ROUTE_APP,
  ROUTE_LOGIN,
  ROUTE_HOME,
  ROUTE_AUTH,
} from '@routes/routes';

const { getStateForAction } = RootNavigator.router;

const initialState = null;

export const nav = (state: any = initialState, action: any) => {
  const { routeName } = action;
  // dirty fix to prevent double loading same route multiple times
  // see more: https://github.com/react-community/react-navigation/issues/2599
  if (state && state.routes) {
    const { routes, index } = state;
    if (routes[index].routeName === routeName) {
      return state;
    }
  }
  return getStateForAction(action, state) || null;
};

export function navigateLogin() {
  return NavigationActions.navigate({ routeName: ROUTE_LOGIN });
}

export function navigateApp() {
  return NavigationActions.navigate({ routeName: ROUTE_APP });
}

export function navigateHome() {
  return NavigationActions.navigate({ routeName: ROUTE_HOME });
}

export function navigateSignIn() {
  return NavigationActions.navigate({ routeName: ROUTE_AUTH });
}
