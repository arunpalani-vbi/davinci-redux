import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginContainer  from '../containers/LoginContainer';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import ReviewScreen from '../components/ReviewScreen';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Home: { screen: HomeScreenContainer },
    Review: { screen: ReviewScreen },
});

class AppWithNavigationState extends React.Component {
    render() {
        const { dispatch, nav, loginStatus } = this.props;
        return (
            loginStatus=="SUCCESS" ?
                <AppNavigator
                    navigation={addNavigationHelpers({
                        dispatch,
                        state: nav,
                        addListener,
                    })}
                /> : <LoginContainer/>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    loginStatus: state.loginStatus
});

export default connect(mapStateToProps)(AppWithNavigationState);
