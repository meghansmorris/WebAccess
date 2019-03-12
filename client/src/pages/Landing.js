import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { MDBCol, MDBRow, MDBContainer, MDBIcon } from "mdbreact";

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
            <MDBRow>
                <MDBCol md="4"></MDBCol>
                <MDBCol md="6">
                    <span>                        
                        <a href="/community" className="pl-1 mr-5">
                            <MDBIcon far icon="comments" size="4x" className="grey-text pr-3" alt="join the conversation" />
                        </a>
                        <a href="/learn" className="mr-5">
                            <MDBIcon  icon="puzzle-piece" size="4x" className="grey-text pr-3" alt="learn" />
                        </a>
                        <a href="/quiz" className="mr-4">
                            <MDBIcon  icon="question" size="4x" className="grey-text pr-3" alt="take a quiz" />
                        </a>
                    </span>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="1"></MDBCol>
                <MDBCol md="9" className="ml-3">
                    <SiteSearch />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    );
}

export default Landing;
  
