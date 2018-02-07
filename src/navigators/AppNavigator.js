import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreenContainer from '../containers/LoginScreenContainer';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import ReviewScreenContainer from '../containers/ReviewScreenContainer';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Home: { screen: HomeScreenContainer },
    Review: { screen: ReviewScreenContainer },
});

class AppWithNavigationState extends React.Component {
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
                /> : <LoginScreenContainer />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    auth: state.auth,
});

export default connect(mapStateToProps)(AppWithNavigationState);
