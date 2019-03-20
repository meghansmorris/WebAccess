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
           <section className="text-center my-5">
           <MDBRow className="cardRow justify-content-center">
                <MDBCol md="3" className="resourceSection1">
                    <MDBIcon icon="universal-access" size="3x" className="univ-icon" />
                    <h5 className="font-weight-bold my-4">WebAIM</h5>
                    <p className="grey-text mb-md-0 mb-5">
                    Web Accessibility In Mind is an organization providing developers with 
                    information and suggestions to make web content more accessible to people with disabilities.
                    </p>
                    <a href="https://webaim.org" target="_blank">
                        <button className="univ-button btn">
                            Learn more
                        </button>
                    </a>
                </MDBCol>
                <MDBCol md="3" className="resourceSection2">
                    <MDBIcon icon="video" size="3x" className="video-icon" />
                    <h5 className="font-weight-bold my-4">A11ycasts with Rob Dodson</h5>
                    <p className="grey-text mb-md-0 mb-5">
                    Learn how to build accessible apps through video with A11ycasts. 
                    This video series teaches the fundamentals of web accessibility using real world examples.
                    </p>
                    <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank">
                        <button className="video-button btn">
                            Learn more
                        </button>
                    </a>
                </MDBCol>
                <MDBCol md="3" className="resourceSection3">
                    <MDBIcon icon="cogs" size="3x" className="cogs-icon" />
                    <h5 className="font-weight-bold my-4">Evaluation Tools</h5>
                    <p className="grey-text mb-md-0 mb-5">
                    An evaluation tool can review a website or software to determine how well it meets accessibility guidelines.
                    Review W3.org's list of available tools.
                    </p>
                    <a href="https://www.w3.org/WAI/ER/tools/" target="_blank">
                        <button className="cogs-button btn">
                            Learn more
                        </button>
                    </a>
                </MDBCol>
            </MDBRow>
            </section> 


        </MDBContainer>
        </>
    );
};

export default Resources;


