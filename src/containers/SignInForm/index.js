import React from 'react';
import { AsyncStorage, View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { userSignIn } from '@modules/user';
import { navigateApp } from '@modules/nav';
import styles from './styles';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: 'bohdan.kh@gmail.com', password: '111111' };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.signIn(user);
      }
    });
  }

  onSubmit() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.signIn(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signIn(user) {
    this.props.userSignIn(user._user);
    this.props.navigateHome();
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
  navigateHome: () => dispatch(navigateApp()),
});

export default connect(null, mapDispatchToProps)(SignInForm);
