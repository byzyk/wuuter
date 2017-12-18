// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateApp, navigateLogin } from '@modules/nav';
import { userSignIn, userSignOut } from '@modules/user';

type Props = {
  signIn: Function,
  signOut: Function,
  navigateApp: Function,
  navigateLogin: Function,
  user: {
    uid: string,
  },
  children: React.Element<any>,
};

class AppContainer extends React.Component<Props> {
  componentDidMount() {
    console.log('App init');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      } else {
        this.signOut();
      }
    });
  }

  signIn(user) {
    this.props.signIn(user._user);
    this.props.navigateApp();
  }

  signOut() {
    if (this.props.user.uid) {
      this.props.navigateLogin();
      this.props.signOut();
    }
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
  navigateLogin: () => dispatch(navigateLogin()),
  signIn: payload => dispatch(userSignIn(payload)),
  signOut: () => dispatch(userSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
