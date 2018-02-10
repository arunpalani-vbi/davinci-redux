const initialState = {
    isLoginFetching: false,
    isLoggedIn: false
}
const login = (state = initialState, action) => {
    switch (action.type) {

        case 'REQUEST_LOGIN':
            return {
                ...state,
                isLoginFetching: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                isLoginFetching: false,
                token: action.authToken,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                isLoginFetching: false,
                errorMessage: action.errorMessage,
            }

        default:
            return state
    }
}

export default login
