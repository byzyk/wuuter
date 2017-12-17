import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateApp } from '@modules/nav';
import { userSignIn, userSignOut } from '@modules/user';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('App init');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      } else {
        if (this.props.user.uid) {
          this.props.signOut();
        }
      }
    });
  }

  signIn(user) {
    this.props.signIn(user._user);
    this.props.navigateApp();
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  navigateApp: () => dispatch(navigateApp()),
  signIn: payload => dispatch(userSignIn(payload)),
  signOut: () => dispatch(userSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
