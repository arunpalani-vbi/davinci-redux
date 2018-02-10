import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { performLogin } from '../actions/login'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => ({
  isLoginFetching: state.login.isLoginFetching,
  isLoggedIn: state.login.isLoggedIn,
  errorMessage: state.login.errorMessage
})

const mapDispatchToProps = dispatch => ({
  performLogin: (username, password) => {
    dispatch(performLogin(username, password));
  }
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginContainer
