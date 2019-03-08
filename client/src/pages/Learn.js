import React, { Component } from "react";
import API from "../utils/API";

class Learn extends Component {

  state = {
      question: "",
      answer: "",
      category: "",
      thumbnails: []
  }

  componentDidMount() {
    this.loadCard();
  }

  loadCard = () => {
      API.getCards()
        .then(res => console.log(res))
  }

render() {
    return (
        <h1>We will display flashcards here.</h1>
        );

    }
}
export default Learn;