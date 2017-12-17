// @flow

import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { LoginNavigator } from '@routes/login';
import { AppNavigator } from '@routes/app';
import { ROUTE_APP, ROUTE_LOGIN } from '@routes/routes';

export const RootNavigator = StackNavigator(
  {
    [ROUTE_APP]: {
      screen: AppNavigator,
    },
    [ROUTE_LOGIN]: {
      screen: LoginNavigator,
    },
  },
  {
    initialRouteName: ROUTE_LOGIN,
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
