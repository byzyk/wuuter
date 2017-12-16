// @flow

import { StackNavigator } from 'react-navigation';
import { ROUTE_HOME } from '@routes/routes';
import { HomeScreen } from '@screens/Home';

export const AppNavigator = StackNavigator(
  {
    [ROUTE_HOME]: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
