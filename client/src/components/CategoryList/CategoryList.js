import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./catStyle.css";
import _ from "underscore";

const Categories = (props) => {

  const categories=["Perceivable", "Operable", "Understanable", "Robust"];

return (
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem className="headCat" >Categories</MDBListGroupItem>
    {_.map(categories, function(category) {
      return <MDBListGroupItem className={category} onClick={() => props.handleCategory(category)}>{category}</MDBListGroupItem>
    })}

    
    {/* <MDBListGroupItem onClick={() => props.handleCategory(category)} active>Perceivable</MDBListGroupItem>
    <MDBListGroupItem href="#">Operable</MDBListGroupItem>
    <MDBListGroupItem href="#">Understandable</MDBListGroupItem>
    <MDBListGroupItem href="#">Robust</MDBListGroupItem> */}
  </MDBListGroup>
</MDBContainer>

);
};

export default Categories;