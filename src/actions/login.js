import * as zohoService from '../services/zoho'
export const requestLogin = () => ({
    type: "REQUEST_LOGIN",
})


export const loginFail = (errorMessage) => ({
    type: "LOGIN_FAIL",
    errorMessage
})

export const loginSuccess = (dispatch, token) => {
    dispatch({
        type: "LOGIN_SUCCESS",
        token
    });

    return zohoService.getDirectReports(token).then(directReports => {
        dispatch({ type: "DIRECT_REPORTS_FETCH_FULLFILLED", directReports });
    }).catch(error => {
        dispatch({ type: "DIRECT_REPORTS_FETCH_REJECTED", errorMessage: error.message })
    });

}

export const performLogin = (username, password) => dispatch => {
    dispatch(requestLogin())
    return zohoService.authenticate(username, password)
        .then(authToken => {
            loginSuccess(dispatch, authToken);
        })
        .catch(error => {
            dispatch(loginFail(error.message))
        })
}
