import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import { MDBContainer } from "mdbreact";

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
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Learn About Web Accessibility</h1>
                <hr className="my-2" />
                <h2 className="lead">Flip through the flashcards to test your knowledge.</h2>
            </Header>
        </MDBContainer>
        );

    }
}
export default Learn;