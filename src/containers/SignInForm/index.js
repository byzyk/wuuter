// @flow

import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

export const SignInForm = () => {
  return (
    <View>
      <TextInput placeholder="Email" keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button onPress={() => false} title="Sign In" />
    </View>
  );
};
