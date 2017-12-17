// @flow

import React from 'react';
import { View } from 'react-native';
import SignInForm from '@containers/SignInForm';
import styles from './styles';

export const SignInScreen = () => (
  <View style={styles}>
    <SignInForm />
  </View>
);
