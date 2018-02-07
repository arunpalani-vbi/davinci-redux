import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { performLogin } from '../actions/login'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  loginStatus: state.loginStatus
})

const mapDispatchToProps = dispatch => ({
  performLogin:(username,password)=>{
   dispatch(performLogin(username,password));
  }
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
