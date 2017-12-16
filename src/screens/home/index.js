// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';
import { navigateSignIn } from '@modules/nav';

export const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
    <Button
      onPress={() => navigation.dispatch(navigateSignIn())}
      title="Sign In"
    />
  </View>
);
