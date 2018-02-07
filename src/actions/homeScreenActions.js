import { NavigationActions } from 'react-navigation';

export const logout = () => dispatch => {
    dispatch({ type: 'Logout' })
}

export const loginScreen = () => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
}

export const reviewScreen = () => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'Review' }))
}