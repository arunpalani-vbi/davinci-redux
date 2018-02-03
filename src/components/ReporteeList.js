
import React from 'react'
import { Button, Text, View, ActivityIndicator } from 'react-native';
const ReporteeList = ({ reportees, isFetching, onFetchReportees }) => (
    <View>

        <Button title="Fetch Reportees" onPress={() => onFetchReportees("e27bfb2806a9ce3fb33813c24c4a97ae")}></Button>
        {!isFetching ? null : <ActivityIndicator size='large' color="#000" />}
        {console.log(reportees)}
        {reportees ? reportees.map(reportee =>
            <Text
                key={reportee.ownerID}
            >{reportee['First Name']}</Text>
        ) : null}
    </View>
)

export default ReporteeList
