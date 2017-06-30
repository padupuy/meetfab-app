import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Keyboard,
  Platform
} from 'react-native';

import Input from '../components/form/Input';
import Button from '../components/form/Button';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    done: false
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
          <Image
            source={require('../assets/images/logo.png')}
            style={[styles.image]}
          />
        </View>
        <View style={[styles.form]}>
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
        </View>
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
    alignSelf: 'center',
    width: 150,
    height: 145
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
