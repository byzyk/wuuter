// @flow

import { TabNavigator } from 'react-navigation';
import { ROUTE_HOME, ROUTE_PROFILE } from '@routes/routes';
import { HomeScreen } from '@screens/Home';
import { ProfileScreen } from '@screens/Profile';

const routes = {
  [ROUTE_HOME]: {
    screen: HomeScreen,
  },
  [ROUTE_PROFILE]: {
    screen: ProfileScreen,
  },
};

const options = {
  initialRouteName: ROUTE_HOME,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
};

export const AppNavigator = TabNavigator(routes, options);
