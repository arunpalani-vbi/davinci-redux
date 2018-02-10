import { connect } from 'react-redux'
import ReviewScreen from '../components/ReviewScreen'

const mapStateToProps = (state) => ({
  questions: state.review.questions
})

// const mapDispatchToProps = dispatch => ({
//   performLogin: (username, password) => {
//     dispatch(performLogin(username, password));
//   }
// })

const ReviewContainer = connect(
  mapStateToProps
)(ReviewScreen)

export default ReviewContainer