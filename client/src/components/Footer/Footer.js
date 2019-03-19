import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue-grey darken-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol className="pr-4" md="6">
            <h5 className="title">Enabling the Web</h5>
            <p className="pl-4">
              We are two web developers learning React and realized that programming applications
              for better web accessibility required reading large amounts of information. We developed
              Enabling the Web to be an easy-to-use tool to help other web developers create applications 
              with web accessibility in mind. 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Find Out More</h5>
            <ul>
              <li className="list-unstyled">
                <a href="http://www.meghansmorris.com" target="_blank">Meghan Morris's Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="https://smanhart.github.io/Portfolio/" target="_blank">Stephanie Manhart's Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="https://webaim.org/" target="_blank">WebAIM</a>
              </li>
              <li className="list-unstyled">
                <a href="/resources">Web Accessibility Resources</a>
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