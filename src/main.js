import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import AppContainer from '@containers/App';
import Navigator from '@containers/Navigator';

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Navigator />
    </AppContainer>
  </Provider>
);

export default App;
