import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import CategoryPage from './CategoryPage'
import { StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};
const ReviewScreen = ({ index, routes, questions, tabNavState, handleIndexChange, getInitialState, dispatch }) => {

    if (routes) {
        const categories = [...new Set(questions.map(question => question.category))];

        const getCategoryPage = (value) => (value => (<CategoryPage />))

        const sceneToMap = categories.reduce((o, key) => ({ ...o, [key]: (key) => <CategoryPage /> }), {});

        const renderScene = SceneMap(sceneToMap);
        const renderHeader = props => <TabBar {...props} scrollEnabled />;

        return (

            <TabViewAnimated
                style={styles.container}
                navigationState={tabNavState}
                renderScene={renderScene}
                renderHeader={renderHeader}
                onIndexChange={handleIndexChange}
                initialLayout={initialLayout}
                useNativeDriver
            />
        );
    } else {
        getInitialState();
        return null;
    }



};

ReviewScreen.navigationOptions = {
    title: 'Review',
};

export default ReviewScreen;
