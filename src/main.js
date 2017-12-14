import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store/create';
import Navigator from '@routes';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
