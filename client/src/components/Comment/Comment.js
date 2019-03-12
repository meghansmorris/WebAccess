import React, { Component } from "react";
import API from "../../utils/API";

import { MDBCol, MDBRow } from 'mdbreact';


class SingleComment extends Component{

  state = {
      headline: "",
      name: "",
      commentText: "",
      dateCreated: "",

  };

  // componentDidMount() {
  //     this.loadComment();
  //   };
  
  // loadComment = () => {
  //     API.getComment()
  //       .then(res => 
  //         //console.log(res)
  //         this.setState({
  //           name: res.data[0].name,
  //           headline: res.data[0].headline,
  //           commentText: res.data[0].commentText,
  //           dateCreated: res.data[0].dateCreated
  //         })
  //       )
  //       // .catch(err => console.log(err));
  // };

//need to add entry form for new comment

  render () {
    return (
      <>
        <MDBRow>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="6">

          </MDBCol>

        </MDBRow>


      
      </>
    )
  }    
};

export default SingleComment;