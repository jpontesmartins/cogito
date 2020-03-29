import React, { Component, Fragment } from "react";
import MarkerDefault from "../App/MarkerDefault";
import Content from "../App/Content";

import hash from "sha1";
import { Map, GeoJSON, TileLayer, } from "react-leaflet";

import "../App/styles.css";

class BaseMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: {
                "type": "FeatureCollection",
                "features": []
              }
        };
    }

    render() {

        const SUL = [-27.590354384999955, -48.556835725999974];
        const SIZE = { height: "100%", width: "100%" };
        const urlTileLayer = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
        const position = [-27.587301, -48.546266];
        const positionZurich = [47.366667, 8.55];
        const positionNasc = [53.311667, -6.274333];
        const { markers } = this.state;

        return (
            <Fragment>
                <div className="map-coluna">

                    <Map
                        style={SIZE}
                        zoomControl={false}
                        zoom={5} center={SUL}
                        onClick={this.clickOnMap}>

                        <TileLayer url={urlTileLayer} />

                        <GeoJSON data={markers}
                            key={hash(markers)}
                            style={{ color: "#000" }}>

                            <MarkerDefault position={position}>
                                <Content title="aaa" />
                            </MarkerDefault>

                            <MarkerDefault position={positionNasc}>
                                <Content title="Rathgar, Dublin, Nascimento" />
                            </MarkerDefault>


                            <MarkerDefault position={positionZurich}>
                                <Content title="Zurich, Morte" />
                            </MarkerDefault>
                        </GeoJSON>

                    </Map>
                </div>
            </Fragment>
        );
    }
}

export default BaseMap;