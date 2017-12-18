// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateApp, navigateLogin } from '@modules/nav';
import { userSignIn, userSignOut } from '@modules/user';
import { Loading } from '@components/Loading';

export type Props = {
  signIn: Function,
  signOut: Function,
  navigateApp: Function,
  navigateLogin: Function,
  user: {
    uid: string,
  },
  children: React.Element<any>,
};

export type State = {
  isLoaded: boolean,
};

class AppContainer extends React.Component<Props, State> {
  state = { isLoaded: false };

  componentDidMount() {
    console.log('App init');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      } else {
        this.signOut();
      }
      this.setState({ isLoaded: true });
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
    const { isLoaded } = this.state;
    return (
      <Loading isLoading={!isLoaded} color="#92B4F4">
        {this.props.children}
      </Loading>
    );
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
