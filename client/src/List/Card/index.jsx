import React, { Component, Fragment } from "react";

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
    }

    render() {
        const card = "card";
        const cardAll = "card-all";
        const cardDate = "card-date";
        const cardEvent = "card-event";
        const cardControl = "card-control";
        const cardControlOff = "card-control-off";

        const { date, event, image, toggle, overImage } = this.state;

        return (
            <Fragment>
                <div className={cardAll} onClick={() => this.setState({toggle: !this.state.toggle})}>
                    <div className={card}>
                        <div className={cardDate}>
                            {date}
                            </div>
                        <div className={cardEvent}>
                            {event}
                        </div>
                    </div>

                    <div className={toggle ? cardControl : cardControlOff}>
                        <img
                            onMouseOut={() => this.setState({ overImage: !this.state.overImage })} 
                            onMouseOver={() => this.setState({ overImage: !this.state.overImage })}
                            width={overImage ? "200px" : "150"}
                            height={overImage ? "200px" : "150"}
                            src={image} />
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Card;