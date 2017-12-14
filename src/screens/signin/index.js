// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigateHome, navigateSignUp } from '@modules/nav';

export const SignInScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SignIn</Text>
    <Button
      onPress={() => navigation.dispatch(navigateSignUp())}
      title="signup"
    />
    <Button onPress={() => navigation.dispatch(navigateHome())} title="home" />
  </View>
);
