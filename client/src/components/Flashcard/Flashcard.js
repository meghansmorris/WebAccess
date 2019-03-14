import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBBtn, MDBCarouselItem } from 'mdbreact';
import ReactCardFlip from 'react-card-flip';
import "./cardStyle.css";
// import CardFront from "../CardFront";
// import CardBack from "../CardBack";

function Flashcard(props, onClick) {

    console.log(props)

    if (!props.card) {
        return (
            <>
            <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        <p>Choose a category to see the flashcards</p>
                    </MDBCardTitle>
                    <MDBCardText>

                    </MDBCardText>
                    <MDBBtn >Click to flip</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard style={{ width: "80%" }} key="back">
                <MDBCardBody>
                    <MDBCardTitle></MDBCardTitle>
                    <MDBCardText>
                        
                    </MDBCardText>
                    <MDBBtn >Click to flip</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            </>
        )
    }


    return (
        <>

            <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        Category: {props.card.category}</MDBCardTitle>
                    <MDBCardText>
                        {props.card.question}
                    </MDBCardText>
                    <MDBBtn onClick={() => onClick}>Click to flip</MDBBtn>
                </MDBCardBody>
            </MDBCard>

            <MDBCard style={{ width: "80%" }} key="back">
                <MDBCardBody>
                    <MDBCardTitle>Category: {props.card.category}</MDBCardTitle>
                    <MDBCardText>
                        {props.card.answer}
                    </MDBCardText>
                    <MDBBtn onClick={() => onClick}>Click to flip</MDBBtn>
                </MDBCardBody>
            </MDBCard>





        </>
    )

}

export default Flashcard;


{/* <MDBBtn onClick={this.handleClick()}>Click to flip</MDBBtn> */ }