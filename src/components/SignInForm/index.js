// @flow

import * as React from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import firebase from 'react-native-firebase';
import { Loading } from '@components/Loading';
import styles from './styles';

type Props = {};

type State = {
  email: string,
  password: string,
  loading: boolean,
  error: string | null,
};

export class SignInForm extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
    loading: false,
    error: null,
  };

  passwordRef: any; // FIXME: find how to type react-native elements properly

  componentDidMount() {
    console.log('login init');
  }

  submit() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: null });
    Keyboard.dismiss();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ loading: false, error: error.toString() });
      });
  }

  render() {
    const { containerStyle, inputStyle, errorStyle } = styles;
    const passwordRef = el => (this.passwordRef = el);

    return (
      <View style={containerStyle}>
        <TextInput
          style={inputStyle}
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          onSubmitEditing={() => {
            this.passwordRef.focus();
          }}
        />
        <TextInput
          style={inputStyle}
          placeholder="PASSWORD"
          ref={passwordRef}
          secureTextEntry={true}
          returnKeyType="done"
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={() => {
            this.submit();
          }}
        />
        <Loading isLoading={this.state.loading}>
          <Button
            color="#FFFFFF"
            onPress={this.submit.bind(this)}
            title="SIGN IN"
          />
        </Loading>
        {this.state.error ? (
          <Text style={errorStyle}>{this.state.error}</Text>
        ) : null}
      </View>
    );
  }
}
