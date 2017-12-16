// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigateHome } from '@modules/nav';
import { SignInForm } from '@containers/SignInForm';
import styles from './styles';

export const SignInScreen = ({ navigation }: any) => (
  <View style={styles}>
    <SignInForm />
  </View>
);
