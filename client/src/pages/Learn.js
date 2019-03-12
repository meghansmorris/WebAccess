import React from "react";
import Header from "../components/Header/Header";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Carousel from "../components/Carousel/Carousel"
import Categories from "../components/CategoryList/CategoryList"

function Learn() {


    return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-3">Learn About Web Accessibility</h1>
                <hr className="my-2" />
                <h2 className="lead">Flip through the flashcards to test your knowledge.</h2>
            </Header>
            <MDBRow>
                <MDBCol md="3">
                    <Categories />
                </MDBCol>
                <MDBCol md="9">
                <Carousel></Carousel>
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
        );

    
}
export default Learn;