// @flow

import React from 'react';
import { View } from 'react-native';
import Home from '@containers/Home';

export class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Home />
      </View>
    );
  }
}
