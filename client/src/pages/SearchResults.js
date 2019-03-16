import React from "react";
import Header from "../components/Header/Header";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { MDBContainer } from "mdbreact";

function SearchResults() {
    return (
        <>
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Web Accessibility Search Results</h1>
                <hr className="my-2" />
                <h2 className="lead">Looking for more? <a href="/resources" alt="toggle to the resources page">Visit the Resources page.</a></h2>
            </Header>
            <SiteSearch />
        </MDBContainer>
        </>
    );
};

export default SearchResults;