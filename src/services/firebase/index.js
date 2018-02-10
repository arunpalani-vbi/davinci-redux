import firebase from 'firebase';
import _ from 'lodash'
let config = {
    apiKey: "AIzaSyClIA9deJhn3rLS3_TgQ1STWy5XZldPs7s",
    authDomain: "vbi-da-vinci.firebaseapp.com",
    databaseURL: "https://vbi-da-vinci.firebaseio.com",
    projectId: "vbi-da-vinci",
    storageBucket: "vbi-da-vinci.appspot.com",
    messagingSenderId: "685626298086"
};
export let firebaseDb = firebase.initializeApp(config).database();


export const fetchQuestion = (employeeId, timePeriod) => {
    let questionsRef = firebaseDb.ref("questions");
    let ratingRef = firebaseDb.ref("rating");
    // let filteredQuestionRef = this.questionsRef.limitToFirst(5);
    let filteredRatingRef = ratingRef
        .orderByChild("searchKey")
        .equalTo(employeeId + timePeriod);
    let questions = [];
    let processQuestionSnapshot = (questionSnapshot) => {
        return filteredRatingRef.once("value").then(ratingSnapshot => {
            let ratings = ratingSnapshot.val() ? ratingSnapshot.val() : {};
            let pushToQuestions = (question, questionKey) => {
                let ratingKey = employeeId + "_" + timePeriod + "_" + questionKey;
                if (ratingKey && ratingKey in ratings) {
                    question.rating = ratings[ratingKey].value;
                }
                else {
                    question.rating = 0;
                }
                question.key = questionKey;
                questions.push(question);
            };
            _.each(questionSnapshot.val(), pushToQuestions);
            console.log(questions)
            return _.groupBy(questions, "behaviourImpact");
        });
    };
    return new Promise.all([questionsRef.once('value').then(processQuestionSnapshot)]).then((response) => {
        return response[0]
    })
    // return questionsRef.once('value').then(processQuestionSnapshot);

}
