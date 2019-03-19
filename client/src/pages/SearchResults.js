import React from "react";
import Header from "../components/Header/Header";
import SiteSearch from "../components/SiteSearch/SiteSearch";
import { List, ListItem } from "../components/List/List";

import { MDBContainer } from "mdbreact";

function SearchResults() {
    return (
        <>
        <MDBContainer fluid>
            <Header>
                <h1 className="display-4">Web Accessibility Search Results</h1>
                <hr className="my-2" />
                <h2 className="lead">Looking for more? <a href="/resources" alt="view the resources page">Visit the Resources page.</a></h2>
            </Header>
            <SiteSearch />
            <List>
                <ListItem>
                    
                </ListItem>
            </List>
        </MDBContainer>
        </>
    );
};

export default SearchResults;