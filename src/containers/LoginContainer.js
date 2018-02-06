import { connect } from 'react-redux'
import { fetchReportees } from '../actions'
import ReporteeList from '../components/ReporteeList'


const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password,
    loginStatus : state.loginStatus
})
 
const mapDispatchToProps = {
    onFetchReportees: fetchReportees
}

const ReporteeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReporteeList)

export default ReporteeListContainer
