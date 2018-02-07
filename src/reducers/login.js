const login = (state = {}, action) => {
    console.log(action);
    switch (action.type) {

        case 'REQUEST_LOGIN':
            return {
                ...state,
                loginStatus: "LOADING"
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginStatus: "SUCCESS",
                token: action.authToken,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                loginStatus: "FAIL",
                errorMessage: action.errorMessage,
            }

        default:
            return state
    }
}

export default login
