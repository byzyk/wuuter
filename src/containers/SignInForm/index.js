import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import styles from './styles';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    console.log('login init');
  }

  submit() {
    Keyboard.dismiss();
    this.setState({ loading: true, error: null });
    const { email, password } = this.state;
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
          autoFocus={true}
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
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <Button
            color="#FFFFFF"
            onPress={this.submit.bind(this)}
            title="SIGN IN"
          />
        )}
        {this.state.error ? (
          <Text style={errorStyle}>{this.state.error}</Text>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SignInForm);
