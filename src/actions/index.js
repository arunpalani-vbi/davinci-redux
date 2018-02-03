export const requestReportees = () => ({
    type: "REQUEST_REPORTEES"
})

export const receiveReportees = (json) => ({
    type: "RECEIVE_REPORTEES",
    reportees: json,
    receivedAt: Date.now()
})

export const fetchReportees = token => dispatch => {
    dispatch(requestReportees())
    return fetch(`https://people.zoho.com/people/api/forms/P_EmployeeView/records?authtoken=${token}`)
        .then(response => JSON.parse(response._bodyText))
        .then(json => dispatch(receiveReportees(json)))
}
