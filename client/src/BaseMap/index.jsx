import React, { Component, Fragment } from "react";
import { Map, GeoJSON, TileLayer, } from "react-leaflet";
import hash from "sha1";

import SpatialInfo from "./SpatialInfo";

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

                            <SpatialInfo />
                           
                        </GeoJSON>

                    </Map>
                </div>
            </Fragment>
        );
    }
}

export default BaseMap;