import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer } from "mdbreact";
import Questions from "../components/QuizQuestion/QuizQuestion";


class TakeQuiz extends React.Component {
    state = {
        score: 0,
        message: "Begin Quiz",
        correctAnswers: [],
        allAnswers: []
    }

    componentDidMount() {

    }
    //begin the quiz
    //when user clicks button "next", check to see if answer is correct
    //add to correct answer array if correct and into allAnswers array 
    //check to see if allAnswers has reached the total number of questions in the quiz
    //if not, increment through array of questions to next question
    //at the end of the quiz, score out of total number of questions - ie 8/10

    render() {
        return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Quiz Your Web Accessibility Knowledge</h1>
                <hr className="my-2" />
                <h2 className="lead">How much you know and what areas you can improve in?</h2>
            </Header>
            <Questions />
        </MDBContainer>
        );
    }
}


export default TakeQuiz;