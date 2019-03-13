import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import NewPost from "../components/Modal/Modal";
import { List, ListItem } from "../components/List/List";
// import SingleComment from "../components/Comment/Comment";
import { MDBContainer } from "mdbreact";
import Moment from "react-moment";


class Community extends Component {

state = {
    comments: []
}

componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
      API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
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
                {this.state.comments.length ? (
                <List>
                {this.state.comments.map(comment => (
                  <ListItem key={comment._id}>
                    <a href={"/community/" + comment._id}>
                      <strong>
                        {comment.headline} by {comment.name}
                      </strong>
                        <p>{comment.commentText}</p>
                        <p>Posted: <Moment format="D MMM YYYY" withTitle>
                            {comment.dateCreated}
                        </Moment></p>
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