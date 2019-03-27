import React from "react";
import {  MDBRow, MDBView, MDBMask, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import hands from "./team-3373638_1920.jpg";
import "./headstyle.css";

const HomeHeader = () => {
  return (
   <> 
      <MDBRow className="pb-5 d-flex mx-auto">
        <MDBCol md="12" className="flex-center">
        <MDBView>
          <img 
            src={hands}
            className="img-fluid"
            alt="hands in"
          />
          <MDBMask pattern={6} className="d-flex flex-center">
              <MDBRow className="">
                <MDBCol md="2" sm="2" xl="2"></MDBCol>
                <MDBCol md="8" sm="6" xl="8">
                  <h1 className="display-2 h1-responsive white-text text-center mb-4 font-weight-bold">
                    <strong>Welcome to Enabling the Web</strong>
                  </h1>
                  <h2 className="h3-responsive white-text text-center pb-5">
                    As developers we all want to create web applications that are intuitive and provide value to our users. Let's work together to make sure EVERYONE can use our sites. 
                  </h2>
                </MDBCol>
              </MDBRow>
          </MDBMask>
        </MDBView>
        </MDBCol>
      </MDBRow>
    {/* <div className="card card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg);">
      <div className="text-white text-center rgba-stylish-strong py-5 px-4">
        <div className="py-5">

          <h5 className="h5 orange-text"><i className="fas fa-camera-retro"></i> Photography</h5>
          <h2 className="card-title h2 my-4 py-2">Jumbotron with image overlay</h2>
          <p className="mb-4 pb-2 px-md-5 mx-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis perferendis vitae cumque et quo impedit.</p>
          <a className="btn peach-gradient"><i className="fas fa-clone left"></i> View project</a>

        </div>
      </div>
    </div> */}
    {/* <MDBRow className="mb-1 d-flex">
        <MDBCol sm="6" md="12" className="mb-1">
          <MDBCard className="bg p-5 card-img-top img-fluid" height="100%" style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2018/05/04/10/30/team-3373638_1280.jpg)"
                }}>
            <MDBCardBody>

            <div className="text-white text-center d-flex rgba-black-strong py-5 px-5">
              <div>
                <h1 className="display-3 py-3 font-weight-bold responsive-font-size">
                  <strong>Welcome to Enabling the Web</strong>
                </h1>
                <h2 className="py-3 px-2 responsive-font-size">
                  As developers we all want to create web applications that are intuitive and provide value to our users. Let's work together to make sure EVERYONE can use our sites. 
                </h2>
              </div>
            </div>

            </MDBCardBody>

          </MDBCard>
        </MDBCol>
    </MDBRow> */}
  </>
  )
}

export default HomeHeader;