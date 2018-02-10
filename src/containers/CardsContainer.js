import { connect } from 'react-redux'
import Cards from '../components/Cards'
import { NavigationActions } from 'react-navigation';

const mapDispatchToProps = dispatch => ({
    navigateToReviewScreen: () => {
        dispatch(NavigationActions.navigate({ routeName: 'Review' }));
    }
})

const CardsContainer = connect(
    mapDispatchToProps
)(Cards)

export default CardsContainer