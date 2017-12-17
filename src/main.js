import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import AppContainer from '@containers/App';
import Navigator from '@routes';
import { navigateSignIn } from '@modules/nav';

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Navigator />
    </AppContainer>
  </Provider>
);

export default App;
