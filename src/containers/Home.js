// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

type Props = {
  user: {
    email: string,
  },
};

class Home extends React.Component<Props> {
  componentDidMount() {
    console.log('home init');
  }

  signOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
