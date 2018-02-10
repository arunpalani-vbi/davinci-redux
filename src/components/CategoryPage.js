import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import QuestionCards from './QuestionCards';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});

const CategoryPage = ({quest}) => {
    // const questionCards = quest.map(employee => (
    //     <QuestionCards employeeData={employee} key={employee.id}/>
    // ));
    return (<ScrollView>
        <View style={styles.questionsMainContainer}>
            {/* {questionCards} */}
        </View>
    
    </ScrollView>)
}

export default CategoryPage;