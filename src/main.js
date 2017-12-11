import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      name: '',
    };
  }

  getData() {
    console.log('init');
    const db = firebase.database();
    const ref = db.ref('name');
    ref.on('value', snapshot => {
      this.setState({
        name: snapshot.val(),
      });
    });
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
        this.getData();
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome, {this.state.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
