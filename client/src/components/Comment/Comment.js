import React, { Component } from "react";
import API from "../../utils/API";
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCol, MDBRow, MDBBtn } from 'mdbreact';

class Comment extends Component{

    state = {
        _headlineId: "",
        commentText: "",
        date: "",

    }

    componentDidMount() {
        this.loadComment();
      };
    
      loadComment = () => {
          API.getComment()
            .then(res => 
              console.log(res)
            //   this.setState({
            //       _id: res.data[0]._id, 
            //       question: res.data[0].question, 
            //       ans1: res.data[0].ans1, 

            //   })
              //console.log(`question: ${res.data[1].question}, answers: ${res.data[0].answers.ans1}${res.data[0].answers.ans2}${res.data[0].answers.ans3}, category: ${res.data[0].category}`),
              //console.log(res)
            )
            .catch(err => console.log(err));
      };





}