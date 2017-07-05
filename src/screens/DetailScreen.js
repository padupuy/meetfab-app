import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>
          {this.props.photo.title}
        </Text>
        <Image source={this.props.photo.src} style={{ width: '100%' }} />
        <Text style={styles.subtitle}>
          {this.props.photo.subtitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    marginTop: 10
  }
});
