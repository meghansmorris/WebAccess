import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { MDBCol, MDBRow, MDBContainer, MDBIcon, MDBTooltip } from "mdbreact";

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
                    <p className="justify-content-start px-4 py-1">To ensure web applications enable everyone to use them effectively and without frustration, web accessibility standards must be considered. That's where we come in! Our learning site provides resources and learning for developers to ensure their sites can be used by all. </p>
                    <p className="justify-content-start px-4 py-1">As you work through our learning portal, join the conversation to ask questions, provide ideas and add answers for other developers working to improve their web accessibility standards. We look forward to engaging with you!</p>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="2"></MDBCol>
                <MDBCol className=" ml-2 pl-4" md="3">
                    <MDBTooltip 
                            placement="bottom"
                            component="MDBCol"
                            tag="div"
                            tooltipContent="Join the Conversation">
                            <a href="/community" className="pl-1 mr-5">
                                <MDBIcon icon="comments" size="4x" className="grey-text pr-3" alt="join the conversation" />
                            </a>                    
                        </MDBTooltip> 
                </MDBCol>
                <MDBCol md="3">
                    <MDBTooltip 
                        placement="bottom"
                        component="MDBCol"
                        tag="div"
                        tooltipContent="Learn Web Accessibility">
                        <a href="/learn" className="mr-5">
                            <MDBIcon icon="puzzle-piece" size="4x" className="grey-text pr-3" alt="learn" />
                        </a>                  
                    </MDBTooltip> 
                </MDBCol>
                <MDBCol md="3">
                    <MDBTooltip 
                        placement="bottom"
                        component="MDBCol"
                        tag="div"
                        tooltipContent="Take a Quiz">
                        <a href="/quiz" className="mr-4">
                            <MDBIcon icon="question" size="4x" className="grey-text pr-3" alt="take a quiz" />
                        </a>                 
                    </MDBTooltip> 
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
  
