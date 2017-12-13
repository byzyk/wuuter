// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Login"
    />
  </View>
);

export default HomeScreen;
