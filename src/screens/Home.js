// @flow

import React from 'react';
import { View } from 'react-native';
import Home from '@containers/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: () => <Icon name="home" size={24} color="#4472CA" />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Home />
      </View>
    );
  }
}
