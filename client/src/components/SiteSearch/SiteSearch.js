import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

class SiteSearch extends Component {

    componentDidMount() {
        (function() {
            var cx = '000810281350211822819:o4tbpnp1jce';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        })()
        };

    render() {
        return (
        <MDBRow>
            <form className="form-inline gcse-searchbox-only mr-4" data-resultsUrl="https://enablingtheweb.herokuapp.com/searchresults"
            data-newWindow="true" data-queryParameterName="search" method="get" title="Search Form" action="https://cse.google.com/cse/publicurl">
                <MDBIcon icon="search" size="1x" className="grey-text mr-2" alt="search" />
                    <input className="form-control form-control-sm " type="text" id="q" name="q" title="Search" placeholder="Search the site" aria-label="Search the site" alt="Search Text" />
                    <input type="hidden" id="cx" name="cx" value="000810281350211822819:o4tbpnp1jce" />
            </form>
        </MDBRow>
        )
    }
};


export default SiteSearch;

