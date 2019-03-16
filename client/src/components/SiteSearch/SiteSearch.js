import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

function SiteSearch() {
    return (
    <MDBRow>
    <MDBCol md="2"></MDBCol>
    <MDBCol md="9">
        <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" size="1x" className="grey-text" alt="search" />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search the site" aria-label="Search the site" />
        </form>
    </MDBCol>
</MDBRow>
    )
  }


export default SiteSearch;