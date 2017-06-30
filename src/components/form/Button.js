import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class Button extends Component {
  renderLabel() {
    const { title, loading, done } = this.props;

    return (
      <Text style={[styles.text, loading ? styles.loadingText : null]}>
        {title}
      </Text>
    );
  }

  renderActivityIndicator() {
    if (this.props.loading) {
      return <ActivityIndicator size="small" color="#000" />;
    }
  }

  onPressButton = () => {
    const { loading, onPress } = this.props;
    onPress(!loading);
  };

  render() {
    const { loading, style, done } = this.props;
    return (
      <TouchableOpacity
        style={[styles.main, style]}
        activeOpacity={0.6}
        hitSlop={{ top: 10, left: 15, bottom: 10, right: 15 }}
        onPress={this.onPressButton}
        accessible={true}
        accessibilityLabel={this.props.accessibilityLabel}
        disabled={this.props.disabled}
      >
        <View>
          {this.renderLabel()}
          {this.renderActivityIndicator()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    position: 'relative',
    zIndex: 1
  },
  loading: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  done: {
    padding: 1500,
    paddingLeft: 1500,
    paddingRight: 1500
  },
  text: {
    color: 'black',
    opacity: 1,
    textAlign: 'center'
  },
  loadingText: {
    color: 'yellow',
    opacity: 0,
    height: 0
  }
});
