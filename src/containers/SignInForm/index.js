import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { userSignIn } from '@modules/user';
import styles from './styles';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit() {
    const { email, password } = this.state;
    console.log(email, password);
    const signIn = firebase.auth().signInWithEmailAndPassword(email, password);
    signIn
      .then(data => {
        console.log(data);
        this.props.userSignIn(data._user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { containerStyle, inputStyle, buttonStyle } = styles;

    return (
      <View style={containerStyle}>
        <TextInput
          style={inputStyle}
          placeholder="EMAIL"
          keyboardType="email-address"
          autoCorrect={false}
          returnKeyType="next"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={inputStyle}
          placeholder="PASSWORD"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Button
          color="#FFFFFF"
          onPress={this.onSubmit.bind(this)}
          title="SIGN IN"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSignIn: payload => dispatch(userSignIn(payload)),
});

export default connect(null, mapDispatchToProps)(SignInForm);
