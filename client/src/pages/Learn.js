import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header/Header";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Carousel from "../components/Carousel/Carousel"
import Categories from "../components/CategoryList/CategoryList"
import _ from "underscore";

class Learn extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedCategory: "Operable",
            cards: [],
            filteredCards: []
        }
        this.handleCategory = this.handleCategory.bind(this);
        this.loadCard = this.loadCard.bind(this);
    }
    
    componentDidMount() {
        this.loadCard();
    }

    loadCard = () => {
        API.getCards()
            .then(res =>
            
                this.setState({ cards: res.data }),
                // console.log(res.data)
                // this.categoryCards()

            )
            .catch(err => console.log(err));
    }

    handleCategory(category) {
        this.setState({ selectedCategory: category }, () => this.categoryCards())
        
        // console.log("learn state: ", this.state)
    }

    categoryCards() {
        const allCards = this.state.cards
        const chosenCategory = this.state.selectedCategory
        console.log("allCards: ", allCards)
        console.log("chosen category: ", chosenCategory)

        let newCardList = _.where(allCards, {category: chosenCategory})
        this.setState({ filteredCards: newCardList})

        
        console.log("filtered cards", newCardList)
    }

    render() {
    return (
        <MDBContainer fluid>
            <Header>
                <h1 className="display-4">Learn About Web Accessibility</h1>
                <hr className="my-2" />
                <h2 className="lead">Flip through the flashcards to test your knowledge.</h2>
            </Header>
            <MDBRow>
                <MDBCol md="3">
                    <Categories 
                    handleCategory={this.handleCategory}
                    selectedCategory={this.state.selectedCategory}/>
                </MDBCol>
                <MDBCol md="9">
                <Carousel filteredCards={this.state.filteredCards}></Carousel>
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
        );
    }
    
}
export default Learn;