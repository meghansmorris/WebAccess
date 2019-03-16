import React from "react";

import { MDBCard, MDBCardTitle, MDBCardBody, MDBCol, MDBRow, MDBBtn } from 'mdbreact';

function Questions(props) {
    console.log(props)
        // state = {
        //     _id: "",
        //     question: "",
        //     ans1: "",
        //     ans2: "",
        //     ans3: "",
        //     correctAns: "",
        //     category: "",
        //     thumbnail: []
        // };
      
        // componentDidMount() {
        //   this.loadQuiz();
        // };
      
        // loadQuiz = () => {
        //     API.getQuiz()
        //       .then(res => 
        //         // console.log(`question: ${res.data}`)
        //         this.setState({
        //             _id: res.data[0]._id, 
        //             question: res.data[0].question, 
        //             ans1: res.data[0].ans1, 
        //             ans2: res.data[0].ans2, 
        //             ans3: res.data[0].ans3, 
        //             correctAns: res.data[0].correctAns, 
        //             category: res.data[0].category 
        //         })
        //         // console.log(`question: ${res.data[1].question}, answers: ${res.data[0].answers.ans1}${res.data[0].answers.ans2}${res.data[0].answers.ans3}, category: ${res.data[0].category}`),
        //         // console.log(res)
        //       )
        //       .catch(err => console.log(err));
        // };

        if(!props.card) {
            return(
                <MDBCard style={{ width: "80%" }} key="front">
                <MDBCardBody>
                    <MDBCardTitle>
                        <p>Your Quiz will load shortly.</p>
                    </MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
            )
        }
   
        return (
        <>
        {/* <MDBRow> */}
            {/* <MDBCol className="ml-5 pl-2 md-10"> */}
                <MDBCard className="card-body" category={props.card.category} id={props.card.correctAns} >
                    <MDBCardTitle>{props.card.question}</MDBCardTitle>
                    <MDBCardBody>
                        <div className="form-check py-2">
                            <input 
                            type="radio" className="form-check-input" 
                            value="ans1" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans1}</label>
                        </div>

                        <div className="form-check py-2">
                            <input 
                            type="radio" className="form-check-input" 
                            value="ans2" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans2}</label>
                        </div>

                        <div className="form-check py-2">
                            <input 
                            type="radio" 
                            className="form-check-input" 
                            value="ans3" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans3}</label>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            {/* </MDBCol> */}
        {/* </MDBRow> */}
        <MDBRow>
            <MDBCol size="5"></MDBCol>
            <MDBCol size="3">
                <MDBBtn color="mdb-color" onClick={()=>props.nextSlide()}>Next</MDBBtn>
            </MDBCol>
        </MDBRow>
        </>
    )
    
}

export default Questions;