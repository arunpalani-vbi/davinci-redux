import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

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

const LoginScreen = ({ dispatch }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Login
    </Text>
        <Text style={styles.instructions}>
            This is great
    </Text>
        <Button
            onPress={() => dispatch({ type: 'Login' })}
            title="Log in"
        />
    </View>
);

// LoginScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };

LoginScreen.navigationOptions = {
    title: 'Log In',
};

const mapStateToProps = state => ({
    nav: state.nav,
    auth: state.auth,
});


export default connect(mapStateToProps)(LoginScreen);
