import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen'
import { loginScreen, reviewScreen, logout } from '../actions/homeScreenActions'

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});
const mapDispatchToProps = {
    loginScreen,
    reviewScreen,
    logout
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);