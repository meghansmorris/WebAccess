import React, { Component } from "react";
import SiteSearch from "../SiteSearch/SiteSearch";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="teal darken-4" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Enabling the Web</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/learn">Learn</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/quiz">Quiz Yourself</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/resources">Resources</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/community">Community</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem size="md" >
            <SiteSearch />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavBar;