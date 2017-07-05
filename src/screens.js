/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

export function registerScreens() {
  Navigation.registerComponent('meetfbabapp.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('meetfbabapp.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('meetfbabapp.DetailScreen', () => DetailScreen);
}
