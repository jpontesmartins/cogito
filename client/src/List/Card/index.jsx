import React, { Component, Fragment } from "react";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { showBirthAndDeathPlaces } from "../../store/actions";
import { cardStyles } from "./classNameStyles";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            event: this.props.event,
            image: this.props.image,
            toggle: false,
            overImage: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { showBirthAndDeathPlaces } = this.props;
        const { birthPlace, deathPlace } = this.getBirthAndDeathPlaces();
        showBirthAndDeathPlaces(birthPlace, deathPlace);

    }

    getBirthAndDeathPlaces() {
        const birthPlace = {
            coordinates: [53.311667, -6.174333],
            name: "Cidade tal"
        };
        const deathPlace = {
            coordinates: [53.311667, -10.174333],
            name: "Cidade outra"
        };
        return { birthPlace, deathPlace };
    }

    componentDidUpdate(prevProps) { }

    render() {
        const { card, cardAll, cardDate, cardEvent, cardControl, cardControlOff } = cardStyles;
        const { date, event, image, toggle, overImage } = this.state;

        return (
            <Fragment>
                <div className={cardAll} >
                    <div className={card} onClick={() => this.setState({ toggle: !this.state.toggle })}>
                        <div className={cardDate}>
                            {date}
                        </div>
                        <div className={cardEvent}>
                            {event}
                        </div>
                    </div>

                    <div className={toggle ? cardControl : cardControlOff}>
                        <img
                            onClick={this.handleClick}
                            width={overImage ? "200px" : "150"}
                            height={overImage ? "200px" : "150"}
                            src={image} />
                    </div>

                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    birthLocal: state.showPlaces.birthLocal,
    deathLocal: state.showPlaces.deathLocal
});

const mapDispatchToProps = dispatch => bindActionCreators({ showBirthAndDeathPlaces }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);