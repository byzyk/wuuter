import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { navigateLogin } from '@modules/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('home init');
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigateLogin();
      });
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Text>Email: {this.props.user.email}</Text>
        <Button onPress={this.signOut.bind(this)} title="SIGN OUT" />
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  navigateLogin: () => dispatch(navigateLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
