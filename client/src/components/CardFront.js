import React from "react";
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';


function CardFront(props) {
    console.log(props);
    

    if(!props.card) {
        return(
            <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        <p>Your card will load shortly</p>
                    </MDBCardTitle>
                    <MDBCardText>

                    </MDBCardText>
                    <MDBBtn >Click to flip</MDBBtn>
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
                    <MDBBtn onClick={() => props.clickFunction()}>Click to flip</MDBBtn>
                </MDBCardBody>
            </MDBCard>
    )
}

export default CardFront;