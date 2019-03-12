import React, { Component } from "react";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

class NewPost extends Component {

    state = {
        name: "",
        headline: "",
        commentText: "",
        modal: false
    }

    handleInputChange = (event) => {
        console.log(event.target);
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

  render () {
    return (
      <>
      <MDBBtn onClick={this.toggle}>Add a New Post</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Write Your Post</MDBModalHeader>
        <MDBModalBody>
        <MDBRow>
          <MDBCol>
            <form>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Headline
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="8"
              />
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Post
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
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