// @flow

import React from 'react';
import { View } from 'react-native';
import Profile from '@containers/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR_WHITE } from '@styles/colors';

export class ProfileScreen extends React.Component<{}> {
  static navigationOptions = {
    headerTitle: 'title',
    title: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" size={30} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={style}>
        <Profile />
      </View>
    );
  }
}

const style = {
  flex: 1,
  backgroundColor: COLOR_WHITE,
  padding: 20,
};
