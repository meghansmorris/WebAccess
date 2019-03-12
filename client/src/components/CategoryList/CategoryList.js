import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./catStyle.css";

const Categories = (props) => {
return (
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem className="headCat" >Categories</MDBListGroupItem>
    <MDBListGroupItem href="#" active>Perceivable</MDBListGroupItem>
    <MDBListGroupItem href="#">Operable</MDBListGroupItem>
    <MDBListGroupItem href="#">Understandable</MDBListGroupItem>
    <MDBListGroupItem href="#">Robust</MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>

);
};

export default Categories;