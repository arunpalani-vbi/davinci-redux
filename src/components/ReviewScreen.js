import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const ReviewScreen = ({ questions }) => (
    <ScrollView>
        <Text style={styles.welcome}>
            {JSON.stringify(questions)}
        </Text>
    </ScrollView>
);

ReviewScreen.navigationOptions = {
    title: 'Review',
};

export default ReviewScreen;
