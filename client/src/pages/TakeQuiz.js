import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer } from "mdbreact";

function TakeQuiz() {
    return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Quiz Your Web Accessibility Knowledge</h1>
                <hr className="my-2" />
                <h2 className="lead">How much you know and what areas you can improve in?</h2>
            </Header>
        </MDBContainer>
        );
}

export default TakeQuiz;