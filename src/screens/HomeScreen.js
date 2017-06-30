import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Hello {this.props.user.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});
