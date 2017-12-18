// @flow

import React from 'react';
import { View, Button, Text } from 'react-native';
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
        <Text>Email: {this.props.user.email}</Text>
        <Button onPress={this.signOut.bind(this)} title="SIGN OUT" />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
