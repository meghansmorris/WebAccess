import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from
"mdbreact";
import Flashcard from "./Flashcard/Flashcard";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel interval={false} activeItem={1} length={4} showControls={true} showIndicators={false} className="z-depth-1" >
        <MDBCarouselInner >
        <MDBRow>
            
          <MDBCarouselItem itemId="1">
          <MDBCol md="12">
            <Flashcard></Flashcard>
            </MDBCol>
          </MDBCarouselItem>

          {/* <MDBCarouselItem itemId="2">
          <MDBCol md="12">
            <Flashcard></Flashcard>
            </MDBCol>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
          <MDBCol md="12">
            <Flashcard></Flashcard>
            </MDBCol>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
           <MDBCol md="12">
            <Flashcard></Flashcard>
            </MDBCol>
          </MDBCarouselItem> */}

          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;