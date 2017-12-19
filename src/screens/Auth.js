// @flow

import React from 'react';
import { View } from 'react-native';
import { AuthForm } from '@components/AuthForm';
import { COLOR_PRIMARY } from '@styles/colors';

export const AuthScreen = () => (
  <View style={styles}>
    <AuthForm />
  </View>
);

const styles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLOR_PRIMARY,
};
