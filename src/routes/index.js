// @flow

import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { LoginNavigator } from '@routes/login';
import { AppNavigator } from '@routes/app';

export const RootNavigator = StackNavigator(
  {
    Login: {
      screen: LoginNavigator,
    },
    App: {
      screen: AppNavigator,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const Root = ({ dispatch, nav }) => {
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav,
  });
  return <RootNavigator navigation={navigation} />;
};

const mapStateToProps = ({ nav }) => ({
  nav,
});

export default connect(mapStateToProps)(Root);
