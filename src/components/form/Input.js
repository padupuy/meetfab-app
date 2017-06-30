import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Input extends Component {
  render() {
    let additionnalProps = { ...this.props };
    delete additionnalProps.styleWrapper;
    delete additionnalProps.style;
    delete additionnalProps.ref;

    return (
      <View style={[styles.inputWrapper, this.props.styleWrapper]}>
        <Ionicons {...this.props.icon} />
        <TextInput
          ref={ref => this.textInput = ref}
          style={[styles.form__input, this.props.style]}
          autoCorrect={false}
          placeholderTextColor="#bcbcbc"
          underlineColorAndroid="transparent"
          {...additionnalProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    overflow: 'hidden',
    paddingHorizontal: 5
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0
  },
  form__input: {
    fontSize: 17,
    color: 'white'
  }
});
