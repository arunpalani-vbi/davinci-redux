const reportees = (state = {}, action) => {
    console.log(action);
    switch (action.type) {

        case 'REQUEST_REPORTEES':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_REPORTEES':
            return {
                ...state,
                isFetching: false,
                reportees: action.reportees,
            }

        default:
            return state
    }
}

export default reportees
