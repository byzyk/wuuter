// @flow

import React from 'react';
import { View } from 'react-native';
import Profile from '@containers/Profile';

export class ProfileScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Profile />
      </View>
    );
  }
}
