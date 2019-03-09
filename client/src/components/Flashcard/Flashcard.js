import React, { Component } from "react";
import API from "../../utils/API";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import ReactCardFlip from 'react-card-flip';
// import CardFront from "../CardFront";
// import CardBack from "../CardBack";

class Flashcard extends Component {

    // state = {
    //     question: "",
    //     answer: "",
    //     category: "",
    //     thumbnails: []
    // }
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            question: "",
            answer: "",
            category: "",
            thumbnails: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.loadCard();
    }

    loadCard = () => {
        API.getCards()
            .then(res => 
                
                this.setState({ question: res.data.question, answer: res.data.answer, category: res.data.category})
            )
            .catch(err => console.log(err));
    }

    

    

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }


    render() {
        return (
            <>
            <MDBCol>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <MDBCard style={{ width: "22rem" }} key="front">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.state.category}</MDBCardTitle>
                        <MDBCardText>
                            {this.state.question}
                    </MDBCardText>
                    <button onClick={this.handleClick}>Click to flip</button>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ width: "22rem" }} key="back">
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <button onClick={this.handleClick}>Click to flip</button>
                    </MDBCardBody>
                </MDBCard>
                </ReactCardFlip>
            </MDBCol>
            </>
    )
    }
}

export default Flashcard;