// @flow

import { StackNavigator } from 'react-navigation';
import { ROUTE_SIGNIN } from '@routes/routes';
import { SignInScreen } from '@screens/signin';

export const LoginNavigator = StackNavigator(
  {
    [ROUTE_SIGNIN]: {
      screen: SignInScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
