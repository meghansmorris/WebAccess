import React, { Component } from "react";
import API from "../../utils/API";
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';

class Questions extends Component{

        state = {
            _id: "",
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            correctAns: "",
            category: "",
            thumbnail: []
        };
      
        componentDidMount() {
          this.loadQuiz();
        };

        // handleFormSubmit = event => {
        //     event.preventDefault();

        // }
      
        loadQuiz = () => {
            API.getQuiz()
              .then(res => 
                //console.log(`question: ${res.data}`)
                this.setState({
                    _id: res.data[0]._id, 
                    question: res.data[0].question, 
                    ans1: res.data[0].ans1, 
                    ans2: res.data[0].ans2, 
                    ans3: res.data[0].ans3, 
                    correctAns: res.data[0].correctAns, 
                    category: res.data[0].category 
                })
                //console.log(`question: ${res.data[1].question}, answers: ${res.data[0].answers.ans1}${res.data[0].answers.ans2}${res.data[0].answers.ans3}, category: ${res.data[0].category}`),
                //console.log(res)
              )
              .catch(err => console.log(err));
        };


    render() {
        return (
        <>
        <MDBRow>
            <MDBCol className="ml-5 pl-2 md-10">
                <MDBCard className="card-body" category={this.state.category} id={this.state.correctAns} style={{ width: "50rem", marginTop: "1rem", marginLeft: "8rem" }}>
                    <MDBCardTitle>{this.state.question}</MDBCardTitle>
                    <MDBCardBody>
                        <div className="form-check py-2">
                            <input type="radio" className="form-check-input" id="ans1" name={this.state._id}/>
                            <label className="form-check-label">{this.state.ans1}</label>
                        </div>

                        <div className="form-check py-2">
                            <input type="radio" className="form-check-input" id="ans2" name={this.state._id}/>
                            <label className="form-check-label">{this.state.ans2}</label>
                        </div>

                        <div className="form-check py-2">
                            <input type="radio" className="form-check-input" id="ans3" name={this.state._id}/>
                            <label className="form-check-label">{this.state.ans3}</label>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </>
    )
    }
}

export default Questions;