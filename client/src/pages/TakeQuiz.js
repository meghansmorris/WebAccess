import React from "react";
import API from "../utils/API";
import _ from "underscore";
import Header from "../components/Header/Header";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Questions from "../components/QuizQuestion/QuizQuestion";
import Categories from "../components/CategoryList/CategoryList"


class TakeQuiz extends React.Component {
    state = {
        cards: [],
        currentCardIndex: 0,
        selectedCategory: "Operable",
        filteredCards: [],
        value: "",
        score: 0,
        message: "Begin Quiz",
        correctAnswers: [],
        allAnswers: [],

}

    componentDidMount() {
        this.loadQuiz();
    }
    
    loadQuiz = () => {
        API.getQuiz()
          .then(res => 
            // console.log('takeQuiz', res.data)
            
            this.setState({ cards: res.data})
          )
          .catch(err => console.log(err));
    };

    categoryCards = () => {
        const allCards = this.state.cards
        const chosenCategory = this.state.selectedCategory
        console.log("allCards: ", allCards)
        console.log("chosen category: ", chosenCategory)

        let newCardList = _.where(allCards, {category: chosenCategory})
        this.setState({ filteredCards: newCardList})

        
        console.log("filtered cards", newCardList)
    }

    handleCategory = (category) => {
        this.setState({ selectedCategory: category }, () => this.categoryCards())
        
    }

    handleButtonChange = (event) => {
        this.setState({ value: event.target.getAttribute("value")}, () => console.log(this.state.value))
        
    }

    checkAnswer = () => {
        if(this.state.value === this.state.filteredCards[this.state.currentCardIndex].correctAns) {
            let newScore = this.state.score + 1
            this.setState({score: newScore})
        } 
    }

    nextSlide = () => {
        this.checkAnswer()
        const lastIndex = this.state.filteredCards.length - 1;
        const { currentCardIndex } = this.state;
        const shouldEndQuiz = currentCardIndex === lastIndex;

        if(shouldEndQuiz) {
            alert(`Your Score is: ${this.state.score}/${this.state.filteredCards.length}`)
            let resetIndex = 0
            this.setState({currentCardIndex: resetIndex})
            let resetScore = 0
            this.setState({score: resetScore})
        } else {
            let index = currentCardIndex + 1
            this.setState({ currentCardIndex: index });
        }

    }

    render() {
       
        return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-4">Quiz Your Web Accessibility Knowledge</h1>
                <hr className="my-2" />
                <h2 className="lead">How much you know and what areas you can improve in?</h2>
            </Header>
            <MDBRow>
                <MDBCol md="3">
                    <Categories handleCategory={this.handleCategory}/>
                </MDBCol>
                <MDBCol md="9">
                {this.state.filteredCards.length ? (
                    <Questions 
                    card={this.state.filteredCards[this.state.currentCardIndex]}
                    handleButtonChange={this.handleButtonChange}
                    nextSlide={this.nextSlide}
                    />
                  ) : (
                    <Questions />
                  
                )}
                    
                </MDBCol>
            
            </MDBRow>
        </MDBContainer>
        );
    }
}


export default TakeQuiz;