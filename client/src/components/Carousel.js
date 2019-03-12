import React, { Component } from "react";
import API from "../utils/API";
import ReactCardFlip from 'react-card-flip';
import Arrow from "./Arrow";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class CarouselPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            cards: [],
            currentCardIndex: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    componentDidMount() {
        this.loadCard();
    }

    loadCard = () => {
        API.getCards()
            .then(res =>
            
                this.setState({ cards: res.data })
                // console.log(res.data)

            )
            .catch(err => console.log(err));
    }

    previousSlide() {
        const lastIndex = this.state.cards.length - 1;
        const { currentCardIndex } = this.state;
        const shouldResetIndex = currentCardIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentCardIndex - 1;

        this.setState({
            currentCardIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.cards.length - 1;
        const { currentCardIndex } = this.state;
        const shouldResetIndex = currentCardIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentCardIndex + 1;

        this.setState({
            currentCardIndex: index
        });
    }

    handleClick(e) {
        console.log(this.state)
        // e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        console.log(this.state)
    }

    render() {
        return (
            <>
            
                <Arrow
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;" />
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <CardFront card={this.state.cards[this.state.currentCardIndex]}
                        key="front"
                        clickFunction={this.handleClick}/>
                    <CardBack card={this.state.cards[this.state.currentCardIndex]}
                        key="back"
                        clickFunction={this.handleClick}/>
                </ReactCardFlip>
                <Arrow
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9654;" />
            </>
        );
    }
}


export default CarouselPage;










