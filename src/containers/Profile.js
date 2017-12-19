// @flow

import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { ProfileName } from '@components/Profile/Name';

type Props = {
  user: {
    email: string,
    name: string,
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
        <View>
          <ProfileName name={this.props.user.email} />
        </View>
        <Button onPress={this.signOut.bind(this)} title="SIGN OUT" />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Profile);
