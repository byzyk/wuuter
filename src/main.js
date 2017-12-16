import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import Navigator from '@routes';
import { navigateHome, navigateSignIn } from '@modules/nav';

// Navigate HOME by default
store.dispatch(navigateSignIn());

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
