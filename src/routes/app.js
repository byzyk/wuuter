// @flow

import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { HomeScreen } from '@screens/home';

export const AppNavigator = StackNavigator(
  {
    Home: {
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
