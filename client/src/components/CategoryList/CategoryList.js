import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import "./catStyle.css";
import _ from "underscore";

const Categories = (props) => {

  const categories=["Perceivable", "Operable", "Understandable", "Robust"];

return (
<MDBContainer>
  <MDBListGroup >
    <MDBListGroupItem className="headCat text-white" >Categories</MDBListGroupItem>
    {_.map(categories, function(category) {
      return <MDBListGroupItem className="catOp" key={category} onClick={() => props.handleCategory(category)}>{category}</MDBListGroupItem>
    })}
  </MDBListGroup>
</MDBContainer>

);
};

export default Categories;