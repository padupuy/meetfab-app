/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export function registerScreens() {
  Navigation.registerComponent('meetfbabapp.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('meetfbabapp.HomeScreen', () => HomeScreen);
}
