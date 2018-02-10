import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView,ActivityIndicator} from 'react-native';
import Cards from './Cards'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    }
});

const HomeScreen = ({ isLoggedIn, isDirectReportsFetching, directReports, token, logout, loginScreen, reviewScreen, dispatch }) => {

    if (!directReports) {
        return <ActivityIndicator color="#1287d0" size="large" />;
    } else {
        const employeeCards = directReports.map(employee => (
            <Cards onCardClick={reviewScreen} employeeData={employee} key={employee.ownerName} />
        ));
        return (
            <ScrollView style={styles.container}>
                {employeeCards}
            </ScrollView>
        )
    }

};

HomeScreen.navigationOptions = {
    title: 'Home Screen',
};

export default HomeScreen;
