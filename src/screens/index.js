import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import HomeScreen from '@screens/home';
import LoginScreen from '@screens/login';

export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});

const App = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = ({ nav }) => ({
  nav,
});

export default connect(mapStateToProps)(App);
