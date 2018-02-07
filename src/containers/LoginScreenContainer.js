import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen'

const mapStateToProps = state => ({
    nav: state.nav,
    auth: state.auth,
});

export default connect(mapStateToProps)(LoginScreen);

