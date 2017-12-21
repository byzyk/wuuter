import 'rxjs';
import { AppRegistry } from 'react-native';
import App from './src/main';

// Disable notifications in app
console.disableYellowBox = true;

AppRegistry.registerComponent('wuuter', () => App);
