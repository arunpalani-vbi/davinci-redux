import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginContainer  from '../containers/LoginContainer';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import ReviewScreenContainer from '../containers/ReviewScreenContainer';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Home: { screen: HomeScreenContainer },
    Review: { screen: ReviewScreenContainer },
    Login:{ screen : LoginContainer}
});

class AppWithNavigationState extends React.Component {
    render() {
        const { dispatch, nav } = this.props;
        return (
                <AppNavigator
                    navigation={addNavigationHelpers({
                        dispatch,
                        state: nav,
                        addListener,
                    })}
                />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
