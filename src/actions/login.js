import * as zohoService from '../services/zoho'
export const requestLogin = () => ({
    type: "REQUEST_LOGIN",
})

export const loginSuccess = (authToken) => ({
    type: "LOGIN_SUCCESS",
    authToken
})
export const loginFail = (errorMessage) => ({
    type: "LOGIN_FAIL",
    errorMessage
})

export const performLogin = (username,password) => dispatch => {
    dispatch(requestLogin())
    return zohoService.authenticate(username,password)
        .then(authToken =>{
            dispatch(loginSuccess(authToken))
        })
        .catch(error =>{
            dispatch(loginSuccess(error.message))
        })
    }
