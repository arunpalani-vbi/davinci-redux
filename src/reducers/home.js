const initialState = {
    directReports: undefined,
    isDirectReportsFetching: false,
    isQuestionFetching: false,
    errorMessage: undefined,
    questions: null
}
const home = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isDirectReportsFetching: true
            }
        case 'DIRECT_REPORTS_FETCH_FULLFILLED':
            return {
                ...state,
                isDirectReportsFetching: false,
                directReports: action.directReports,
            }
        case 'DIRECT_REPORTS_FETCH_REJECTED':
            return {
                ...state,
                isDirectReportsFetching: false,
                errorMessage: action.errorMessage,
            }
        case 'FETCH_QUESTIONS_FULLFILLED':
        return {
            ...state,
            questions: action.questions,
            isQuestionFetching: false
        }
        case 'FETCH_QUESTIONS_REJECTED':
        return {
            ...state,
            isQuestionFetching: false
        }

        default:
            return state
    }
}

export default home
