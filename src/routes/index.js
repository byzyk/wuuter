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

type Props = {
  nav: State,
  dispatch: any,
};

type State = {
  index: number,
  routes: Array<any>,
};

const Root = ({ dispatch, nav }: Props) => {
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
