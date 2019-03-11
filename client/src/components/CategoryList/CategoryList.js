import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./catStyle.css";

const Categories = (props) => {
return (
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem className="headCat" >Categories</MDBListGroupItem>
    <MDBListGroupItem href="#" active>Dapibus ac facilisis in</MDBListGroupItem>
    <MDBListGroupItem href="#">Morbi leo risus</MDBListGroupItem>
    <MDBListGroupItem href="#">Porta ac consectetur ac</MDBListGroupItem>
    <MDBListGroupItem href="#">Vestibulum at eros</MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>

);
};

export default Categories;