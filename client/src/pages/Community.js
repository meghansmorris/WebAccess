import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import NewPost from "../components/Modal/Modal";
import { List, ListItem } from "../components/List/List";
import { MDBContainer,MDBBadge } from "mdbreact";
import Moment from "react-moment";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";


class Community extends Component {

state = {
    comments: [],
    name: "",
    headline: "",
    commentText: ""

}

componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
      API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  }

  removeComment = (id) => {
      API.deleteComment(id)
      .then(res => this.loadComments())
      .catch(err => console.log(err));
      console.log(id);

  };

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
                {this.state.comments.length ? (
                <List>
                {this.state.comments.map(comment => (
                    <ListItem key={comment._id}>
                    <DeleteBtn onClick={() => this.removeComment(comment._id)} />
                    <a href={"/comments/" + comment._id}>
                    <MDBBadge 
                        color="blue-grey" 
                        className="d-flex justify-content-between align-items-center" 
                        style={{ float: "left", font: "12px" }}><strong>{comment.name}</strong>
                    </MDBBadge>
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="mb-1">{comment.headline}</h4>
                        </div>
                            <p className="mb-1">{comment.commentText}</p>
                            <small>Posted: <Moment format="D MMM YYYY" withTitle>
                                {comment.dateCreated}
                            </Moment></small>
                    </a>
                    </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Discussions to Display</h3>
            )}
            </MDBContainer>
            );
    }
}



export default Community;