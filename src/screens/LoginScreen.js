import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  Animated
} from 'react-native';

import Input from '../components/form/Input';
import Button from '../components/form/Button';

const IMAGE_HEIGHT = 145;
const IMAGE_HEIGHT_SMALL = 50;

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    done: false
  };

  keyboardHeight = new Animated.Value(0);
  imageHeight = new Animated.Value(IMAGE_HEIGHT);

  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardWillShow
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        'keyboardWillHide',
        this.keyboardWillHide
      );
    } else {
      this.keyboardWillShowSub = Keyboard.addListener(
        'keyboardDidShow',
        this.keyboardWillShow
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        'keyboardDidHide',
        this.keyboardWillHide
      );
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 200,
        toValue: event.endCoordinates.height
      }),
      Animated.timing(this.imageHeight, {
        duration: 200,
        toValue: IMAGE_HEIGHT_SMALL
      })
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: 100,
        toValue: 0
      }),
      Animated.timing(this.imageHeight, {
        duration: 100,
        toValue: IMAGE_HEIGHT
      })
    ]).start();
  };

  handleSubmit = () => {
    Keyboard.dismiss();

    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ done: true, loading: false });

      setTimeout(() => {
        this.setState({ done: false });
      }, 500);
    }, 500);
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.imageWrapper, styles.pv]}>
          <Animated.Image
            source={require('../assets/images/logo.png')}
            style={[
              styles.image,
              {
                opacity: this.state.opacityLogo,
                top: this.state.offsetTopLogo,
                height: this.imageHeight
              }
            ]}
          />
        </View>
        <Animated.View
          style={[
            styles.form,
            {
              top: this.state.offsetTopForm,
              opacity: this.state.opacityForm,
              paddingBottom: this.keyboardHeight
            }
          ]}
        >
          <Input
            icon={{
              name: 'ios-person-outline',
              size: 25,
              color: 'white'
            }}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style={styles.input}
            keyboardType="email-address"
            styleWrapper={[styles.inputWrapper, styles.ph]}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => this.passwordInput.textInput.focus()}
          />
          <Input
            ref={ref => this.passwordInput = ref}
            icon={{
              name: 'ios-lock-outline',
              size: 25,
              color: 'white'
            }}
            placeholder="Mot de passe"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.input}
            styleWrapper={[styles.inputWrapper, styles.ph]}
            secureTextEntry={true}
            returnKeyType="send"
            blurOnSubmit={true}
            onSubmitEditing={() => this.handleSubmit()}
          />
          <View style={styles.buttonWrapper}>
            <Button
              title="CONNEXION"
              loading={this.state.loading}
              done={this.state.done}
              onPress={() => this.handleSubmit()}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  form: {
    flex: 1
  },
  imageWrapper: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    paddingLeft: 20 / 2,
    height: 40
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1
  },
  ph: {
    marginHorizontal: 40
  },
  pv: {
    marginTop: 50
  }
});
