// @flow

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { RootNavigator } from '@routes';

type Props = {
  nav: State,
  dispatch: any,
};

type State = {
  index: number,
  routes: Array<any>,
};

const Navigator = ({ dispatch, nav }: Props) => {
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav,
  });
  return <RootNavigator navigation={navigation} />;
};

const mapStateToProps = ({ nav }) => ({
  nav,
});

export default connect(mapStateToProps)(Navigator);
