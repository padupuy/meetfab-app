import React, { Component } from 'react';
import firebase from 'firebase';
import Config from 'react-native-config';

const firebaseConf = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID
};

console.log(firebaseConf);

import LoginScreen from './src/screens/LoginScreen';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConf);
  }
  render() {
    return <LoginScreen />;
  }
}
