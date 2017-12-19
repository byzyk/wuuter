// @flow

import * as React from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import firebase from 'react-native-firebase';
import { Loading } from '@components/Loading';
import { COLOR_WHITE, COLOR_ERROR } from '@styles/colors';

type Props = {};

type State = {
  email: string,
  password: string,
  loading: boolean,
  error: string | null,
};

export class AuthForm extends React.Component<Props, State> {
  state = {
    email: 'bohdan.kh@gmail.co',
    password: '111111',
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
        if (error.code === 'auth/user-not-found') {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
              this.showError(error.userInfo.NSLocalizedDescription);
            });
        } else {
          this.showError(error.userInfo.NSLocalizedDescription);
        }
      });
  }

  showError(error: string) {
    this.setState({
      loading: false,
      error,
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
            color={COLOR_WHITE}
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

const styles = {
  containerStyle: {
    padding: 30,
    width: '100%',
  },
  inputStyle: {
    backgroundColor: COLOR_WHITE,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
    borderRadius: 3,
    width: '80%',
  },
  errorStyle: {
    color: COLOR_ERROR,
    textAlign: 'center',
    marginTop: 20,
  },
};
