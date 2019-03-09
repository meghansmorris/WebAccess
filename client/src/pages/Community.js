import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer } from "mdbreact";

function Community() {
    return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Join the Conversation</h1>
                <hr className="my-2" />
                <h2 className="lead">Let's work together to make the web more accessible to all users.</h2>
                <h2 className="lead">Add thoughts, answer questions from other developers and discuss strategies for web accessibility.</h2>
            </Header>
        </MDBContainer>
        );
}

export default Community;