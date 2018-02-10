import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen'
import { loginScreen, reviewScreen, logout,fetchDirectReports } from '../actions/homeScreenActions'

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn,
    directReports: state.home.directReports,
    token: state.login.token,
    isDirectReportsFetching: state.home.isDirectReportsFetching,
});
const mapDispatchToProps = {
    loginScreen,
    reviewScreen,
    logout,
    fetchDirectReports
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);