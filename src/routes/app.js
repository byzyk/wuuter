// @flow

import { TabNavigator } from 'react-navigation';
import { ROUTE_HOME, ROUTE_PROFILE } from '@routes/routes';
import { HomeScreen } from '@screens/Home';
import { ProfileScreen } from '@screens/Profile';
import { COLOR_PRIMARY } from '@styles/colors';

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
    activeTintColor: COLOR_PRIMARY,
  },
};

export const AppNavigator = TabNavigator(routes, options);
