import React from "react";
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';


function CardFront(props) {
    // console.log(props);
    

    if(!props.card) {
        return(
            <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        <p>Choose a category to see the flashcards.</p>
                    </MDBCardTitle>
                    <MDBCardText>

                    </MDBCardText>
                    {/* <MDBBtn >Click to flip</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>
        )
    }

    return (

        
        <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        Category: {props.card.category}</MDBCardTitle>
                    <MDBCardText>
                        {props.card.question}
                    </MDBCardText>
                    <button className="btn cardButton" onClick={() => props.clickFunction()}>Click to flip</button>
                </MDBCardBody>
            </MDBCard>
    )
}

export default CardFront;