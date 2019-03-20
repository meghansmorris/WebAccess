import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

function Resources() {
    return (
        <>
        <MDBContainer fluid>
            <Header>
                <h1 className="display-4">Web Accessibility Resources</h1>
                <hr className="my-2" />
                <h2 className="lead">Looking for more? Here are a few helpful resources to continue building enabled web applications.</h2>
            </Header>
           <section>
           <MDBRow className="cardRow justify-content-center">
                <MDBCol md="3" className="resourceSection1">
                <MDBRow>
                    <MDBCol className="justify-content-left" lg="2" md="3" size="2">
                    <MDBIcon icon="universal-access" size="2x" className="univ-icon" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">WebAIM</h4>
                    <p className="grey-text">
                        Web Accessibility In Mind is an organization providing developers with 
                        information and suggestions to make web content more accessible to people with disabilities.
                    </p>
                    <button href="https://webaim.org" target="_blank" className="univ-button btn">
                        Learn more
                    </button>
                    </MDBCol>
                </MDBRow>
                </MDBCol>
                <MDBCol md="3" className="resourceSection2">
                <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="video" size="2x" className="video-icon" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">A11ycasts with Rob Dodson</h4>
                    <p className="grey-text">
                        Learn how to build accessible apps through video with A11ycasts. 
                        This video series teaches the fundamentals of web accessibility using real world examples.
                    </p>
                    <button href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank" className="video-button btn">
                        Learn more
                    </button>
                    </MDBCol>
                </MDBRow>
                </MDBCol>
                <MDBCol md="3" className="resourceSection3">
                <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="cogs" size="2x" className="cogs-icon" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">Evaluation Tools</h4>
                    <p className="grey-text">
                        An evaluation tool can review a website or software to determine how well it meets accessibility guidelines.
                        Review W3.org's list of available tools.
                    </p>
                    <button href="https://www.w3.org/WAI/ER/tools/" target="_blank" className="cogs-button btn">
                        Learn more
                    </button>
                    </MDBCol>
                </MDBRow>
                </MDBCol>
            </MDBRow>
            </section> 


        </MDBContainer>
        </>
    );
};

export default Resources;