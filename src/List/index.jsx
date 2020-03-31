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
                        date="1882"
                        event="Nascimento de James Joyce"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Revolutionary_Joyce_Better_Contrast.jpg/330px-Revolutionary_Joyce_Better_Contrast.jpg" />

                    <Card
                        date="1828"
                        event="Nascimento de Lev Tolstoi"
                        image="https://www.portaldaliteratura.com/assets/files_autores/1740.jpg" />

                    <Card
                        date="1899"
                        event="Nascimento de Ernest Hemingway"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/800px-ErnestHemingway.jpg" />

                </div>
            </Fragment>
        );
    }
}

export default List;