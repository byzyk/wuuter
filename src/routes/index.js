// @flow

import { StackNavigator } from 'react-navigation';
import { LoginNavigator } from '@routes/login';
import { AppNavigator } from '@routes/app';
import { ROUTE_APP, ROUTE_LOGIN } from '@routes/routes';

const routes = {
  [ROUTE_APP]: {
    screen: AppNavigator,
  },
  [ROUTE_LOGIN]: {
    screen: LoginNavigator,
  },
};

const options = {
  initialRouteName: ROUTE_LOGIN,
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const RootNavigator = StackNavigator(routes, options);
