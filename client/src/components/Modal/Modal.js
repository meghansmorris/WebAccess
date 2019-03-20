import React, { Component } from "react";
import { Input, TextArea, FormBtn} from "../Form/Form";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";
import "./modal.css";

class NewPost extends Component {

    state = {
        comment: [],
        postName: "",
        postMessage: "",
        postHeadline: "",
        modal: false
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    loadComments = () => {
      API.getComments()
      .then(res => this.setState({ comment: res.data }))
      .catch(err => console.log(err));
    }

    addNewPost = (event) => {
      console.log("inside new post")
      event.preventDefault();
      if (this.state.postName && this.state.postMessage) {
        API.saveComment({
          name: this.state.postName,
          headline: this.state.postHeadline,
          commentText: this.state.postMessage
        })
        .then(res => this.loadComments())
        .catch(err => console.log(err))
      }
      console.log(this.state.postName);
      console.log(this.state.postHeadline);
      console.log(this.state.postMessage);
      this.toggle();
      window.location.reload();
    }

    toggle = () => {
      console.log("inside toggle");
        this.setState({
          modal: !this.state.modal
        });
      }

  render () {
    return (
      <>
      <button className="newPostBtn btn" onClick={this.toggle}>Add a New Post</button>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Write Your Post</MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
          <MDBCol>
            <form>
              <label htmlFor="postName" className="grey-text">
                Your Name
              </label>
                <Input id="postName"                 
                value={this.state.postName}
                onChange={this.handleInputChange}
                name="postName" />
              <br />
              <label
                htmlFor="postHeadline"
                className="grey-text"
              >
                Your Post Headline
              </label>
                <Input id="postHeadline"
                value={this.state.postHeadline}
                onChange={this.handleInputChange}
                name="postHeadline" />
              
              <br />
              <label
                htmlFor="postMessage"
                className="grey-text"
              >
                Your Post Message
              </label>
                <TextArea id="postMessage"
                value={this.setState.postMessage}
                onChange={this.handleInputChange}
                name="postMessage" />

              <div className="text-center mt-4">
               <FormBtn 
                  disabled={!(this.state.postName && this.state.postMessage)} 
                  onClick={this.addNewPost}>Post
                </FormBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        </MDBModalBody>
      </MDBModal>
    </>
       
    );
  }

  
}

export default NewPost;