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

import { LinearGradient } from 'expo';
import {styles} from '../styles'

const LoginForm = ({errorMessage,loginStatus,email,onLoginSubmit,onEmailChange,onPasswordChange}) => (
  <View style={styles.container}>
    <KeyboardAvoidingView
      behavior="position"
      style={{
        width: '100%',
      }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
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
          {loginStatus=="LOADING" ?<ActivityIndicator color="#fff" />: null }
        </View>
        {loginStatus!="LOADING" ? <View style={styles.formContainer}>
          <Text style={styles.loginInfoText}>
            Login with Zoho credentials
        </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            value={email}
            onChangeText={onEmailChange}
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
            onChangeText={onPasswordChange}
            ref={input => (this.passwordInput = input)}
            placeholder="Password"
            placeholderTextColor="#eee"
            secureTextEntry
          />
           {loginStatus=="FAIL" ? <Text>{errorMessage}</Text>:null}
           {loginStatus=="SUCCESS" ? <Text>SUCCESS</Text>:null}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onLoginSubmit}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View> : <View style={styles.formContainer}></View>}
      </LinearGradient>
    </KeyboardAvoidingView>

  </View>
)
export default LoginForm