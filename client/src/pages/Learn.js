import React, { Component } from "react";
import API from "../utils/API";

class Learn extends Component {

  state = {
      question: "",
      answers: "",
      correctAns: "",
      category: "",
      thumbnails: []
  }

  componentDidMount() {
    this.loadQuiz();
  }

  loadQuiz = () => {
      API.getQuiz()
        .then(res => console.log(res))
  }

render() {
    return (
        <h1>We will display flashcards here.</h1>
        );

    }
}
export default Learn;