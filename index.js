import { AppRegistry } from 'react-native';
import App from './App';
import StorybookUI from './storybook';

if(__DEV__) {
  AppRegistry.registerComponent('kakko', () => StorybookUI);
} else {
  AppRegistry.registerComponent('kakko', () => App);
}

