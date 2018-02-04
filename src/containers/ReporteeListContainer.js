import { connect } from 'react-redux'
import { fetchReportees } from '../actions'
import ReporteeList from '../components/ReporteeList'

const mapStateToProps = (state) => ({
    reportees: state.reportees,
    isFetching: state.isFetching
})

const mapDispatchToProps = {
    onFetchReportees: fetchReportees
}

const ReporteeListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReporteeList)

export default ReporteeListContainer
