import React from "react";
import {  MDBJumbotron } from "mdbreact";

function Header({ children }) {
    return (
      <MDBJumbotron>
           {children}
      </MDBJumbotron>
       
    );
  }


export default Header;