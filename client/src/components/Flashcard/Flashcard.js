import React, { Component } from "react";
import API from "../../utils/API";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBBtn, MDBCarouselItem } from 'mdbreact';
import ReactCardFlip from 'react-card-flip';
import "./cardStyle.css";
// import CardFront from "../CardFront";
// import CardBack from "../CardBack";

class Flashcard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            question: "Question Here",
            answer: "Answer Here",
            category: "This is the Category",
            thumbnails: [],
            cards: [],
            id: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.loadCard();
    }

    loadCard = () => {
        API.getCards()
            .then(res => 
                // this.setState({ question: res.data[0].question, answer: res.data[0].answer, category: res.data[0].category})
                // console.log(`question: ${res.data[0].question}, answer: ${res.data[0].answer}, category: ${res.data[0].category}`)
                this.setState({cards: res.data})
                // console.log(res.data)
                
            )
            .catch(err => console.log(err));
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    //creates an incrementing id so carousel can order the cards
    incrementId() {
        let id = 0;
        id++
        this.setState({id: id})
    }


    render() {
        return (
            <>
            {this.state.cards.map(card =>(
                // <MDBCarouselItem incrementId={this.incrementId()} itemId={this.state.id}>
                // <MDBCol md="12">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <MDBCard style={{ width: "80%" }} key="front">
                    <MDBCardBody>
                        <MDBCardTitle>
                            Category: {card.category}</MDBCardTitle>
                        <MDBCardText key={card.id}>
                            {card.question}
                        </MDBCardText>
                        <MDBBtn onClick={this.handleClick}>Click to flip</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard style={{ width: "80%" }} key="back">
                    <MDBCardBody>
                        <MDBCardTitle>Category: {card.category}</MDBCardTitle>
                        <MDBCardText>
                            {card.answer}
                        </MDBCardText>
                        <MDBBtn onClick={this.handleClick}>Click to flip</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </ReactCardFlip>
        //     </MDBCol>
        //   </MDBCarouselItem>
            ))}
            
            
            </>
    )
    }
}

export default Flashcard;