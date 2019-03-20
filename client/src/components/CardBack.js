import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

function CardBack(props) {

    if(!props.card) {
        return(
            <MDBCard style={{ width: "80%" }} key="back">
                <MDBCardBody>
                    <MDBCardTitle></MDBCardTitle>
                    <MDBCardText>
                        
                    </MDBCardText>
                    {/* <MDBBtn >Click to flip</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>
        )
    }
    return (
        <MDBCard style={{ width: "80%" }} key="back">
                <MDBCardBody>
                    <MDBCardTitle>Category: {props.card.category}</MDBCardTitle>
                    <MDBCardText>
                        {props.card.answer}
                    </MDBCardText>
                    <button className="btn cardButton" onClick={() => props.clickFunction()}>Click to flip</button>
                </MDBCardBody>
            </MDBCard>
    )
}

export default CardBack;