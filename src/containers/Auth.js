// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { AuthForm } from '@components/AuthForm';
import { signInRequest } from '@modules/user';

type Props = {
  dispatch: Function,
  si: any,
};

class Auth extends React.Component<Props> {
  signIn(user) {
    const { dispatch } = this.props;
    dispatch(signInRequest(user));
  }

  render() {
    return <AuthForm onSubmit={this.signIn.bind(this)} />;
  }
}

export default connect()(Auth);
