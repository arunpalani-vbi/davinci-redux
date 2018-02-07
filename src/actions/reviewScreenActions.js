export const handleIndexChange = (index) => dispatch => {
    dispatch({ type: 'SCROLL_TAB_INDEX_CHANGE', index: index })
}
export const getInitialState = () => dispatch => {
    dispatch({ type: 'GET_INITITAL_STATE'})
}