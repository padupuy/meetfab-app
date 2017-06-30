import React, { Component } from 'react';
import firebase from 'firebase';
import Config from 'react-native-config';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
registerScreens();

const firebaseConf = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConf);

const navigatorStyle = {
  navBarHidden: true
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'meetfbabapp.LoginScreen', // unique ID registered with Navigation.registerScreen
    navigatorStyle: navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },

  animated: false,
  animationType: 'none',
  animateShow: false
});
