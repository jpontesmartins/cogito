import React, { Component, Fragment } from "react";

import "../../App/styles.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            event: this.props.event,
            image: this.props.image
        };
    }

    render() {
        const card = "card";
        const cardAll = "card-all";
        const cardDate = "card-date";
        const cardEvent = "card-event";
        const cardControl = "card-control";

        const { date, event, image } = this.state;

        return (
            <Fragment>
                <div className={cardAll}>
                    <div className={card}>
                        <div className={cardDate}>
                            {date}
                            </div>
                        <div className={cardEvent}>
                            {event}
                            </div>
                    </div>

                    <div className={cardControl}>
                        <img
                            width="150px"
                            height="150px"
                            src={image} />
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Card;