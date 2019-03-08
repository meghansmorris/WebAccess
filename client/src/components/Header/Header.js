import React from "react";
import {  MDBRow, MDBCol, MDBCard } from "mdbreact";

const Header = () => {
  return (
<MDBRow className="mb-1">
    <MDBCol md="12" className="mb-1">
      <MDBCard className="bg p-5 card-img-top" height="100%" style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2018/05/04/10/30/team-3373638_1280.jpg)"
            }}>
        <div className="text-white text-center d-flex rgba-black-strong py-5 px-5">
          <div>
            <h2 className="py-3 font-weight-bold">
              <strong>Welcome!</strong>
            </h2>
            <h4 className="pb-2 px-1">
              As developers we all want to create web applications that are intuitive, provide value to our users and reach the masses. 
            </h4>
            <h5 className="px-4 py-1">To ensure web applications enable everyone to use them effectively and without frustration, web accessibility standards must be considered. That's where we come in! Our learning site provides resources and learning for developers to ensure their sites can be used by all. </h5>
            <h5 className="px-4 py-1">As you work through our learning portal, join the conversation to ask questions, provide ideas and add answers for other developers working to improve their web accessibility standards.</h5>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
</MDBRow>
  )
}

export default Header;