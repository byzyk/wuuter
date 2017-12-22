// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { AuthForm } from '@components/AuthForm';

class Auth extends React.Component<{}> {
  signIn(user) {
    console.log(user);
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch(error => {
    //     if (error.code === 'auth/user-not-found') {
    //       firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .catch(error => {
    //           this.showError(error.userInfo.NSLocalizedDescription);
    //         });
    //     } else {
    //       this.showError(error.userInfo.NSLocalizedDescription);
    //     }
    //   });
  }

  render() {
    return <AuthForm onSubmit={this.signIn.bind(this)} />;
  }
}

export default connect()(Auth);
