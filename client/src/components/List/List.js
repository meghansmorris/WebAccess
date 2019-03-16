import React from "react";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";

export function List({ children }) {
  return (
      <MDBListGroup className= "ml-5 mt-3" >{children}</MDBListGroup>
  );
}

export function ListItem({ children }) {
  return (
    <MDBListGroupItem>{children}</MDBListGroupItem>
  );
}