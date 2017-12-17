import React from 'react';
import { AsyncStorage, View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { userSignIn, userSignOut } from '@modules/user';
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
      } else {
        if (this.props.user.uid) {
          this.props.signOut();
        }
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
    this.props.signIn(user._user);
    this.props.navigateApp();
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
        <Button
          color="#FFFFFF"
          onPress={this.props.navigateApp.bind(this)}
          title="HOME"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  navigateApp: () => dispatch(navigateApp()),
  signIn: payload => dispatch(userSignIn(payload)),
  signOut: () => dispatch(userSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
