// @flow

import React from 'react';
import { View } from 'react-native';
import { AuthForm } from '@components/AuthForm';

export const AuthScreen = () => (
  <View style={styles}>
    <AuthForm />
  </View>
);

const styles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#92B4F4',
};
