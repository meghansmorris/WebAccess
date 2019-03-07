import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Header = () => {
  return (
    <MDBJumbotron fluid>
      <MDBContainer>
        <h1 className="display-4">Welcome</h1>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Header;