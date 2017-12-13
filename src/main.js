import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store/create';
import Navigator from '@screens';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
