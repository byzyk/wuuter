import React from 'react';
import { AsyncStorage, View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateApp } from '@modules/nav';
import styles from './styles';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: 'bohdan.kh@gmail.com', password: '111111' };
  }

  componentDidMount() {
    console.log('login init');
  }

  onSubmit() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
