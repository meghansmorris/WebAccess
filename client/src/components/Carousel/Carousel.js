import React, { Component } from "react";
import API from "../../utils/API";
import ReactCardFlip from 'react-card-flip';
import { MDBIcon } from 'mdbreact'
import Arrow from "../Arrow/Arrow";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import _ from "underscore";
import "./carouselStyle.css";

class CarouselPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isFlipped: false,
            filteredCards: this.props.filteredCards,
            currentCardIndex: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        
    }


    previousSlide() {
        const lastIndex = this.props.filteredCards.length - 1;
        const { currentCardIndex } = this.state;
        const shouldResetIndex = currentCardIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentCardIndex - 1;

        this.setState({
            currentCardIndex: index, 
            isFlipped: false
        });
    }

    nextSlide() {
        const lastIndex = this.props.filteredCards.length - 1;
        const { currentCardIndex } = this.state;
        const shouldResetIndex = currentCardIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentCardIndex + 1;

        this.setState({
            currentCardIndex: index,
            isFlipped: false
        });
    }

    handleClick(e) {
        console.log(this.state)
        // e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        console.log(this.state)
    }


    render(props) {
        console.log('carousel props: ', this.props)
        return (
            <>
            
               {/* <p> filteredCards:{this.state.filteredCards}
                 </p> */}
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <CardFront card={this.props.filteredCards[this.state.currentCardIndex]}
                        key="front"
                        clickFunction={this.handleClick}/>
                    <CardBack card={this.props.filteredCards[this.state.currentCardIndex]}
                        key="back"
                        clickFunction={this.handleClick}/>
                </ReactCardFlip>
                <div className="arrows text-center">
                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;"/>
                   
                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />
                </div>
            </>
        );
    }
}


export default CarouselPage;









