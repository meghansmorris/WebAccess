import React from "react";
import Header from "../components/Header/Header";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { MDBContainer } from "mdbreact";

function Resources() {
    return (
        <>
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Web Accessibility Resources</h1>
                <hr className="my-2" />
                <h2 className="lead">Looking for more? Here are a few helpful resources to continue building enabled web applications.</h2>
            </Header>
            <SiteSearch />
        </MDBContainer>
        </>
    );
};

export default Resources;