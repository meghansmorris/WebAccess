import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

function SiteSearch() {
    return (
    <MDBRow>
    <MDBCol md="2"></MDBCol>
    <MDBCol md="9">
        {/* <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" size="1x" className="grey-text" alt="search" />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search the site" aria-label="Search the site" />
        </form> */}

        <form className="form-inline mt-4 mb-4 gcse-searchbox" method="get" title="Search Form" action="https://cse.google.com/cse/publicurl">
            <MDBIcon icon="search" size="1x" className="grey-text" alt="search" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" id="q" name="q" title="Search" placeholder="Search the site" aria-label="Search the site" alt="Search Text" />
                <input type="hidden" id="cx" name="cx" value="000810281350211822819:o4tbpnp1jce" />
                <MDBBtn id="searchSubmit" name="submit" alt="Submit" size="sm" title="Submit">Submit</MDBBtn>
        </form>
    </MDBCol>
</MDBRow>
    )
  }


export default SiteSearch;

{/* <script>
  (function() {
    var cx = '000810281350211822819:o4tbpnp1jce';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search> */}

