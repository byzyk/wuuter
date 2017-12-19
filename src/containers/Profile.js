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

class Profile extends React.Component<Props> {
  componentDidMount() {
    console.log('profile init');
  }

  signOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
        <Text>PROFILE!!!</Text>
        <Text>Email: {this.props.user.email}</Text>
        <Button onPress={this.signOut.bind(this)} title="SIGN OUT" />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Profile);
