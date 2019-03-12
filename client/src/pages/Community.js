import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import NewPost from "../components/Form/Form";
// import SingleComment from "../components/Comment/Comment";
import { MDBContainer } from "mdbreact";

class Community extends Component {

state = {

}

componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
      API.getComments()
        .then(res => console.log(res))
  }

    render() {
        return (
            <MDBContainer fluid>
                <Header>
                    <h1 className="display-3">Join the Conversation</h1>
                    <hr className="my-2" />
                    <h2 className="lead">Let's work together to make the web more accessible to all users.</h2>
                    <h2 className="lead">Add thoughts, answer questions from other developers and discuss strategies for web accessibility.</h2>
                </Header>
                <NewPost />
            </MDBContainer>
            );
    }
}



export default Community;