import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

/*
State for Scrollable Tabs in Review Screen
*/
const initialReviewState = {
    isInitialRoutesReady: false,
    tabNavState: {
        index: 0,
        routes: null
    },
    questions: [
        {
            "id": 1,
            "category": "Category1",
            "question": "Q1"
        },
        {
            "id": 2,
            "category": "Category1",
            "question": "Q2"
        },
        {
            "id": 3,
            "category": "Category2",
            "question": "Q3"
        },
        {
            "id": 4,
            "category": "Category2",
            "question": "Q4"
        },
        {
            "id": 5,
            "category": "Category3",
            "question": "Q1"
        },
        {
            "id": 6,
            "category": "Category3",
            "question": "Q2"
        },
        {
            "id": 7,
            "category": "Category4",
            "question": "Q3"
        },
        {
            "id": 8,
            "category": "Category4",
            "question": "Q1"
        },
        {
            "id": 9,
            "category": "Category5",
            "question": "Q2"
        },
        {
            "id": 10,
            "category": "Category5",
            "question": "Q3"
        }
    ]
};

function review(state = initialReviewState, action) {
    let newState;
    switch (action.type) {
        case 'GET_INITITAL_STATE':
            const categories = [...new Set(state.questions.map(question => question.category))];
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

    }
    return state;
}

const AppReducer = combineReducers({
    nav,
    auth,
    review,
});

export default AppReducer;
