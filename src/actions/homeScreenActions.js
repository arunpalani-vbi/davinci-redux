import { NavigationActions } from 'react-navigation';
import * as zohoService from '../services/zoho'
import { fetchQuestion } from '../services/firebase'
export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' })
}

export const loginScreen = () => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
}

export const reviewScreen = (employeeId, timePeriod) => dispatch => {
    dispatch(NavigationActions.navigate({ routeName: 'Review' }))

    return fetchQuestion(employeeId, timePeriod).then(questions => {
        console.log(questions);
        dispatch({ type: "FETCH_QUESTIONS_FULLFILLED", questions });
    }).catch(error => {
        dispatch({ type: "FETCH_QUESTIONS_REJECTED", errorMessage: error.message })
    });
}