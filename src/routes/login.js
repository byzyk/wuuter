// @flow

import { StackNavigator } from 'react-navigation';
import { ROUTE_AUTH } from '@routes/routes';
import { AuthScreen } from '@screens/Auth';

const routes = {
  [ROUTE_AUTH]: {
    screen: AuthScreen,
  },
};

const options = {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
};

export const LoginNavigator = StackNavigator(routes, options);
