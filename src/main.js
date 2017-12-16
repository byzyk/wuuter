import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import Navigator from '@routes';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
