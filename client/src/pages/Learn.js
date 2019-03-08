import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer } from "mdbreact";

function Learn() {
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

export default Learn;