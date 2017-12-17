// @flow

import React from 'react';
import { View, Text, Button } from 'react-native';
import Home from '@containers/Home';

export const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Home />
  </View>
);
