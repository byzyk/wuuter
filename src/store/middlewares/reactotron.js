// @flow

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({ name: 'wuuter' })
  .use(reactotronRedux())
  .connect()
  .clear();
