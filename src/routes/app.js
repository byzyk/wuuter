// @flow

import { TabNavigator } from 'react-navigation';
import { ROUTE_HOME, ROUTE_PROFILE } from '@routes/routes';
import { HomeScreen } from '@screens/Home';
import { ProfileScreen } from '@screens/Profile';
import { COLOR_ACTIVE, COLOR_INACTIVE, COLOR_SECONDARY } from '@styles/colors';

const routes = {
  [ROUTE_HOME]: {
    screen: HomeScreen,
  },
  [ROUTE_PROFILE]: {
    screen: ProfileScreen,
  },
};

const options = {
  initialRouteName: ROUTE_PROFILE,
  animationEnabled: true,
  lazy: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: COLOR_ACTIVE,
    inactiveTintColor: COLOR_INACTIVE,
    showLabel: false,
    activeBackgroundColor: COLOR_SECONDARY,
    inactiveBackgroundColor: COLOR_SECONDARY,
  },
};

export const AppNavigator = TabNavigator(routes, options);
