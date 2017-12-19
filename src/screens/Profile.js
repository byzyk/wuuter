// @flow

import React from 'react';
import { View } from 'react-native';
import Profile from '@containers/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => <Icon name="user" size={24} color="#4472CA" />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Profile />
      </View>
    );
  }
}
