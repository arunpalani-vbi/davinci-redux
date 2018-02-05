import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import HomeScreen from '../components/HomeScreen';
import ReviewScreen from '../components/ReviewScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Review: { screen: ReviewScreen },
});

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav, auth } = this.props;
        return (
            auth.isLoggedIn ?
                <AppNavigator
                    navigation={addNavigationHelpers({
                        dispatch,
                        state: nav,
                        addListener,
                    })}
                /> : <LoginScreen />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    auth: state.auth,
});

export default connect(mapStateToProps)(AppWithNavigationState);
