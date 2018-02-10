const initialState = {
    isQuestionFetching: false,
    errorMessage: undefined,
    questions: null
}
const review = (state = initialState, action) => {
    switch (action.type) {

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

export default review;
