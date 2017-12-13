// @flow

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '@screens';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home'),
);

export default function nav(state: any = initialState, action: any) {
  switch (action.type) {
    case 'Login':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state,
      );
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
