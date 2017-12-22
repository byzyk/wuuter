// @flow

import React from 'react';
import { View } from 'react-native';
import Auth from '@containers/Auth';
import { COLOR_PRIMARY } from '@styles/colors';

export const AuthScreen = () => (
  <View style={styles}>
    <Auth />
  </View>
);

const styles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLOR_PRIMARY,
};
