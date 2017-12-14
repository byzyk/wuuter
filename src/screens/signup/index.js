// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigateHome, navigateSingIn } from '@modules/nav';

export const SignUpScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SignUp</Text>
    <Button
      onPress={() => navigation.dispatch(navigateSingIn())}
      title="sign in"
    />
    <Button onPress={() => navigation.dispatch(navigateHome())} title="home" />
  </View>
);
