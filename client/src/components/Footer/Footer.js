import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue-grey darken-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Project 3 Placeholder</h5>
            <p>
              Let's describe our project here.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Find Out More</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Meghan Morris's Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Stephanie Manhart's Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="https://webaim.org/">WebAIM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Stephanie Manhart & Meghan Morris
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;