import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import validate from 'validate.js'
import { LinearGradient } from 'expo';
import { styles } from '../styles'
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showForm: true
    }
  }

  _loginToZoho = () => {
    var errorData = validate(this.state, constraints);
    if (errorData) {
      if (errorData.email) {
        Alert.alert(errorData.email[0]);
        this.emailInput.focus();
      }
      else if (errorData.password) {
        Alert.alert(errorData.password[0]);
        this.passwordInput.focus()
      }
      return;
    }
    this.props.performLogin(this.state.email, this.state.password);
  }
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return (
      <View style={styles.container}>

        <KeyboardAvoidingView
          behavior="position"
          style={{
            width: '100%',
          }}
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <LinearGradient
            style={{
              padding: 20,
            }}
            colors={['#7ac4e8', '#1287d0']}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.stretch}
                resizeMode={Image.resizeMode.contain}
                source={require('../images/360logo.png')}
              />
              {this.state.showForm ? null : <ActivityIndicator size={50} color="#fff" />}
            </View>
            {this.state.showForm ? <View style={styles.formContainer}>
              <Text style={styles.loginInfoText}>
                Login with Zoho credentials
              </Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={input => (this.emailInput = input)}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder="Email"
                placeholderTextColor="#eee"
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType="go"
                onChangeText={password => this.setState({ password })}
                ref={input => (this.passwordInput = input)}
                placeholder="Password"
                placeholderTextColor="#eee"
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this._loginToZoho}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View> : <View style={styles.formContainer}></View>}
          </LinearGradient>
        </KeyboardAvoidingView>

      </View>
    );
  }
}
const constraints = {
  email: {
    format: {
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: '^Please enter a valid email'
    },
    presence: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 1,
      message: "^Please enter password"
    }
  }
};
