// @flow

import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { SignInScreen } from '@screens/signin';
import { SignUpScreen } from '@screens/signup';

export const LoginNavigator = StackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
