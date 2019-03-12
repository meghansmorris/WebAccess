import React from "react";
import { MDBBtn, MDBIcon } from 'mdbreact';


export function Input(props) {
    return (
        <input type="text" className="form-control" {...props} />

    );
  }
  
  export function TextArea(props) {
    return (
        <textarea type="text" className="form-control" rows="8" {...props} />
    );
  }
  
  export function FormBtn(props) {
    return (
        <MDBBtn {...props} color="info" outline type="submit">
            {props.children}
            <MDBIcon far icon="paper-plane" className="ml-2" />
      </MDBBtn>

    );
  }

