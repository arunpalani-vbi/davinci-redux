import { AsyncStorage } from 'react-native'
import endPoints from '../api/endpoint'
const onLoginRequestSuccess = (response) => {
    let responseArray = response._bodyText.split('\n');
    let errorMessage = '';
    let authToken = '';
    let responseData = responseArray[2];
    if (responseData.indexOf("CAUSE") == 0) {
        errorMessage = responseData.replace("CAUSE=", "");
    }
    else if (responseData.indexOf("AUTHTOKEN") == 0) {
        authToken = responseData.replace("AUTHTOKEN=", "");
    }
    else {
        errorMessage = 'UNKNOWN';
    }
    if (errorMessage) {
        let error = new Error(errorMessage);
        throw error;
    }

    return AsyncStorage.setItem('authToken', authToken).then((error) => {
        if (error)
            throw error;
        return authToken
    });


};

const onRequestFail = (error) => {
    let errorMessage = 'UNKNOWN';
    return { errorMessage }
}

const fetchLoginToken = (email, password) => {
    let formData = new FormData();
    formData.append("SCOPE", 'Zohopeople/peopleapi');
    formData.append("EMAIL_ID", email);
    formData.append("PASSWORD", password);
    return fetch(endPoints.zoho.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData
    });
}
export const authenticate = (email, password) =>
    fetchLoginToken(email, password)
        .then(onLoginRequestSuccess).catch(onRequestFail)

