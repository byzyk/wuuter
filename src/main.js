import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store/create';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>Welcome!</Text>
    </View>
  </Provider>
);

export default App;
