
import { SceneMap } from 'react-native-tab-view';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ReviewScreen from '../components/ReviewScreen'
import { handleIndexChange, getInitialState } from '../actions/reviewScreenActions'


const mapStateToProps = state => ({
    tabNavState: state.review.tabNavState,
    questions: state.review.questions,
    routes: state.review.tabNavState.routes,
    index: state.review.tabNavState.index
});

const mapDispatchToProps = {
    getInitialState,
    handleIndexChange
};
const ReviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewScreen)


export default ReviewContainer
