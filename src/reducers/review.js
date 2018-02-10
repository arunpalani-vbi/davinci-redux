/*
State for Scrollable Tabs in Review Screen
*/
const initialReviewState = {
    isQuestionFetching: false,
    errorMessage: undefined,
    questions: null,
    isInitialRoutesReady: false,
    tabNavState: {
        index: 0,
        routes: null
    },
    questions: null
};

const review = (state = initialReviewState, action) => {
    switch (action.type) {
        case 'GET_INITITAL_STATE':
            const categories = Object.keys(state.questions);
            const intialRoute = categories.reduce((o, key) => {
                return o.concat({ key: key, title: key })
            }, []);
            newState = { ...state },
                tabNavState = newState.tabNavState;
            tabNavState.routes = intialRoute;
            return newState;
        case 'SCROLL_TAB_INDEX_CHANGE':
            newState = { ...state },
                tabNavState = newState.tabNavState;
            tabNavState.index = action.index;
            return newState;
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
