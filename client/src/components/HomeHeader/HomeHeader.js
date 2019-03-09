import React from "react";
import {  MDBRow, MDBCol, MDBCard } from "mdbreact";

const HomeHeader = () => {
  return (
   <> 
    <MDBRow className="mb-1">
        <MDBCol md="12" className="mb-1">
          <MDBCard className="bg p-5 card-img-top" height="100%" style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2018/05/04/10/30/team-3373638_1280.jpg)"
                }}>
            <div className="text-white text-center d-flex rgba-black-strong py-5 px-5">
              <div>
                <h1 className=" display-2 py-3 font-weight-bold">
                  <strong>Welcome!</strong>
                </h1>
                <h2 className="py-3 px-2">
                  As developers we all want to create web applications that are intuitive and provide value to our users. Let's work together to make sure EVERYONE can use our sites. 
                </h2>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
    </MDBRow>
  </>
  )
}

export default HomeHeader;