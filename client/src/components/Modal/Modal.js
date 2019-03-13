import React, { Component } from "react";
import { Input, TextArea, FormBtn} from "../Form/Form";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBRow, MDBCol } from 'mdbreact';
import API from "../../utils/API";

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

    addNewPost = () => {
      console.log("inside new post")
      // API.saveComment(data)
      // .then(res => this.setState({ comment: res.data }))
      // .catch(err => console.log(err));
      console.log(this.state.postName);
      this.toggle();

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
      <MDBBtn color="blue-grey" onClick={this.toggle}>Add a New Post</MDBBtn>
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
                <Input id="postHeadline" />
              
              <br />
              <label
                htmlFor="postMessage"
                className="grey-text"
              >
                Your Post Message
              </label>
                <TextArea id="postMessage" />

              <div className="text-center mt-4">
               <FormBtn onClick={this.addNewPost}>Post</FormBtn>
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