import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";

function Landing() {
    return (
        <>
        <MDBContainer fluid>
            <HomeHeader/>
            <MDBRow>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="8">
                    <h3>Our Goal</h3>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="8">
                    <p className="px-4 py-1">To ensure web applications enable everyone to use them effectively and without frustration, web accessibility standards must be considered. That's where we come in! Our learning site provides resources and learning for developers to ensure their sites can be used by all. </p>
                    <p className="px-4 py-1">As you work through our learning portal, join the conversation to ask questions, provide ideas and add answers for other developers working to improve their web accessibility standards. We look forward to engaging with you!</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    );
}

export default Landing;
  
