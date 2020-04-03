import React, { Component, Fragment } from "react";
import MarkerDefault from "./MarkerDefault";
import Content from "./Content";

class SpatialInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const positionZurich = [47.366667, 8.55];
        const positionNasc = [53.311667, -6.274333];

        return (
            <Fragment>
                <MarkerDefault position={positionNasc}>
                    <Content title="Rathgar, Dublin, Nascimento" />
                </MarkerDefault>

                <MarkerDefault position={positionZurich}>
                    <Content title="Zurich, Morte" />
                </MarkerDefault>
            </Fragment>
        );
    }
}

export default SpatialInfo;