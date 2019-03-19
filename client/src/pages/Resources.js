import React from "react";
import Header from "../components/Header/Header";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

function Resources() {
    return (
        <>
        <MDBContainer fluid>
            <Header>
                <h1 className="display-4">Web Accessibility Resources</h1>
                <hr className="my-2" />
                <h2 className="lead">Looking for more? Here are a few helpful resources to continue building enabled web applications.</h2>
            </Header>
            <SiteSearch />
            
            <section className="my-5">
            <MDBRow>
                <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="universal-access" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">WebAIM</h4>
                    <p className="grey-text">
                        Web Accessibility In Mind is an organization providing developers with 
                        information and suggestions to make web content more accessible to people with disabilities.
                    </p>
                    <MDBBtn href="https://webaim.org" target="_blank" color="cyan darken-3" size="md">
                        Learn more
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="video" size="2x" className="teal-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">A11ycasts with Rob Dodson</h4>
                    <p className="grey-text">
                        Learn how to build accessible apps through video with A11ycasts. 
                        This video series teaches the fundamentals of web accessibility using real world examples.
                    </p>
                    <MDBBtn href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank" color="teal darken-3" size="md">
                        Learn more
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                    <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="cogs" size="2x" className="mdb-color-text" />
                    </MDBCol>
                    <MDBCol lg="10" md="9" size="10">
                    <h4 className="font-weight-bold">Evaluation Tools</h4>
                    <p className="grey-text">
                        An evaluation tool can review a website or software to determine how well it meets accessibility guidelines.
                        Review W3.org's list of available tools.
                    </p>
                    <MDBBtn href="https://www.w3.org/WAI/ER/tools/" target="_blank" color="mdb-color" size="md">
                        Learn more
                    </MDBBtn>
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