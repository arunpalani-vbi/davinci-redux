import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { performLogin } from '../actions/login'
import LoginForm from '../components/LoginForm'

import validate from 'validate.js'
const constraints = {
    email: {
      format: {
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: '^Please enter valid email'
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

const validateForm = ()=>{
    var errorData = validate(this.state, constraints);
    console.log(errorData);
    if (errorData) {
      if (errorData.email) {
        Alert.alert(errorData.email[0]);
      }
      else if (errorData.password) {
        Alert.alert(errorData.password[0]);
      }
      return false;
    }
    return true;

}
const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password,
    loginStatus : state.loginStatus
})
 
const mapDispatchToProps = dispatch => ({
    onLoginSubmit:()=>{
        validateForm()?dispatch(performLogin(state.email,state.password)):null;
    },
    onEmailChange:(email)=>{
      //console.log(this,email);
        this.setState({email})
    },
    onPasswordChange:(password)=>{
        this.setState({password})
    }
})
console.log(mapDispatchToProps(function(){}));
const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default LoginContainer
