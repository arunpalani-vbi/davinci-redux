import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const HomeScreen = ({ isLoggedIn, logout, loginScreen, reviewScreen, dispatch }) => {
    if (!isLoggedIn) {
        return <Text>Please log in</Text>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                {'You are "logged in" right now'}
            </Text>
            <Button
                onPress={reviewScreen}
                title="Review"
            />
            <Button
                title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
                onPress={isLoggedIn ? logout : loginScreen}
            />
        </View>
    )
};

HomeScreen.navigationOptions = {
    title: 'Home Screen',
};

export default HomeScreen;
