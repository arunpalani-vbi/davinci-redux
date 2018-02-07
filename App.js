import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import LoginContainer from './src/containers/LoginContainer'
import reducer from './src/reducers/login'

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(middleware, thunk)),
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <LoginContainer/>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Review360', () => App);

export default App;
