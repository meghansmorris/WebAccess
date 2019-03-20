import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import { MDBCol, MDBRow, MDBContainer, MDBView, MDBMask, MDBCardBody  } from "mdbreact";
import code from "./images/code.jpg";
import studying from "./images/studying.jpg";
import meeting from "./images/meeting.jpg";
import woman from "./images/woman-computer.jpg";

function Landing() {
    return (
        <>
        <MDBContainer fluid>
            <HomeHeader/>

            <section className="text-justify my-5">
                <div className=" mx-auto mission-desc">
                <MDBRow>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="5">
                        <h2 className=" mission-head font-weight-bold">
                        Our Mission
                        </h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="10" >
                        <h5 className="grey-text mx-auto mb-3">
                        To ensure web applications enable everyone to use them effectively and without frustration, web accessibility standards must be considered. That's where we come in! Our learning site provides resources and learning for developers to ensure their sites can be used by all.
                        </h5>
                        <h5 className="grey-text mx-auto">
                        As you work through our learning portal, join the conversation to ask questions, provide ideas and add answers for other developers working to improve their web accessibility standards. We look forward to engaging with you!
                        </h5>
                    </MDBCol>
                </MDBRow>
                </div>
                <MDBRow className="d-flex justify-content-center card-row">
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                    <img src={code}
                        alt="code"
                        className="img-fluid principles"
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold mb-3">Understanding the Four Principles of Accessibility</h4>
                    <p>
                        Our learning portal was built using the Web Content Accessibility Guidelines 2.0 and is structured using the four principles that lay the foundation for web use and content. To make the best use of our portal, understand what each principle considers.
                    </p>
                    <a href="#fourPrinciples">
                        <button className="principles-btn btn">
                            Learn More
                        </button>
                    </a>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                    <img
                        src={woman}
                        alt="woman on computer"
                        className="img-fluid"
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold mb-3">Learn About Web Accessibility</h4>
                    <p>
                        Utilize our flashcards to learn more about each of the four principles and how you can improve your web content.
                    </p>
                    <a href="/learn">
                        <button className="flashcards-btn btn">
                            View Flashcards
                        </button>
                    </a>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                    <img
                        src={studying}
                        alt="woman studying"
                        className="img-fluid"
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                    <h4 className="font-weight-bold mb-3">Test Your Knowledge</h4>
                    <p>
                        After you've reviewed the flashcards, test your knowledge with our quizzes. There are questions for each of the four principles.
                    </p>
                    <a href="/quiz">
                        <button className="quiz-btn btn">
                            Take a Quiz
                        </button>
                    </a>

                    </MDBCardBody>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                    <img
                        src={meeting}
                        alt="code discussion"
                        className="img-fluid"
                    />
                    <a href="#!">
                        <MDBMask overlay="white-slight" />
                    </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">

                    <h4 className="font-weight-bold mb-3">Join the Conversation</h4>
                    <p>
                        Engage with other developers who are learning to make their sites more accessible. Join the community by adding comments and answering questions from others.
                    </p>
                    <a href="/community">
                        <button className="conversation-btn btn">
                            Learn More
                        </button>
                    </a>
                    </MDBCardBody>
                </MDBCol>
                </MDBRow>
            </section>
            <section>
                <div id="fourPrinciples" className="principleSection" fluid>
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="8">
                        <h2 className=" principle-head font-weight-bold">
                        Understanding the Four Principles of Accessibility
                        </h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="10" >
                        <p>The guidelines and Success Criteria are organized around the following four principles, which lay the foundation necessary for anyone to access and use Web content. 
                            Anyone who wants to use the Web must have content that is:
                        </p>
                        <ul>
                            <li>
                            <strong>Perceivable</strong> - Information and user interface components must be presentable to users in ways they can perceive.
                            </li>
                            <li>
                            <strong>Operable</strong> - User interface components and navigation must be operable.
                            </li>
                            <li>
                            <strong>Understandable</strong> - Information and the operation of user interface must be understandable.
                            </li>
                            <li>
                            <strong>Robust</strong> - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. 
                            </li>
                        </ul>
                        <p>If any of these are not true, users with disabilities will not be able to use the Web.
                        </p>
                        <p>Under each of the principles are guidelines and Success Criteria that help to address these principles for people with disabilities. 
                            There are many general usability guidelines that make content more usable by all people, including those with disabilities. 
                            To learn more, visit <a href="https://www.w3.org/WAI/" target="_blank" alt="W3C site">W3C's Web Accessibility Initiative</a>.</p>
                    </MDBCol>
                </MDBRow>
                </div>

            </section>

        </MDBContainer>
        </>
    );
}

export default Landing;
  
