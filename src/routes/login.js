// @flow

import { StackNavigator } from 'react-navigation';
import { ROUTE_SIGNIN } from '@routes/routes';
import { AuthScreen } from '@screens/Auth';

export const LoginNavigator = StackNavigator(
  {
    [ROUTE_SIGNIN]: {
      screen: AuthScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
