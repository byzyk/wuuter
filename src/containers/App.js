// @flow

import * as React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateApp, navigateLogin } from '@modules/nav';
import { signInSuccess, signOut } from '@modules/user';
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
  dispatch: Function,
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
    const { dispatch } = this.props;

    dispatch(signInSuccess(user));
    dispatch(navigateApp());
  }

  signOut() {
    const { dispatch } = this.props;
    if (this.props.user.uid) {
      dispatch(signOut());
      dispatch(navigateLogin());
    }
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <Loading isLoading={!isLoaded} color="#92B4F4">
        <StatusBar animated={true} barStyle="default" />
        {this.props.children}
      </Loading>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(AppContainer);
