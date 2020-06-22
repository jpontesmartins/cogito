import React, { Component, Fragment } from "react";

import Card from "./Card";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const a = [54.2, 37.616667];

        return (
            <Fragment>
                <div className="column1">
                    <Card
                        date="1791"
                        event="Charles Babbage"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/687px-Charles_Babbage_-_1860.jpg" />

                    <Card
                        date="1815"
                        event="Ada Lovelace"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ada_lovelace.jpg/300px-Ada_lovelace.jpg" />

                    <Card
                        date="1860"
                        event="Herman Hollerith"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Hollerith.jpg/330px-Hollerith.jpg"/>

                    <Card
                        date="1912"
                        event="Alan Turing"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/660px-Alan_Turing_Aged_16.jpg"/>

                </div>
            </Fragment>
        );
    }
}

export default List;