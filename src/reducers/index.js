import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import login from './login'
import home from './home'
import review from './review'
// const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);
function nav(state = initialNavState, action) {
    console.log("here1",action);
    let nextState;
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case 'LOGOUT':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }
const AppReducer = combineReducers({
    nav,
    login,
    home,
    review
});

export default AppReducer;
