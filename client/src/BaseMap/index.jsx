import React, { Component, Fragment } from "react";
import { Map, GeoJSON, TileLayer, } from "react-leaflet";
import hash from "sha1";
import { connect } from 'react-redux'

import MarkerDefault from "./MarkerDefault";
import Content from "./Content";

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

    componentDidUpdate(prevProps) {    }


    render() {

        const SUL = [-27.590354384999955, -48.556835725999974];
        const SIZE = { height: "100%", width: "100%" };
        const urlTileLayer = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
        
        const { markers } = this.state;

        let position = [53.311667, -10.174333]

        const { birthLocal, deathLocal } = this.props;

        let birth = {
            coordinates: [0,0],
            name: "Birth"
        }
        let death = {
            coordinates: [10,10],
            name: "Death"
        };
        
        if (birthLocal) {
            birth = birthLocal;
            death = deathLocal;
        }

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

                            {/* <SpatialInfo /> */}

                            <MarkerDefault position={birth.coordinates}>
                                <Content title={birth.name} />
                            </MarkerDefault>
                            <MarkerDefault position={death.coordinates}>
                                <Content title={death.name} />
                            </MarkerDefault>
                           
                        </GeoJSON>

                    </Map>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    birthLocal: state.showPlaces.birthLocal,
    deathLocal: state.showPlaces.deathLocal
});

export default connect(mapStateToProps)(BaseMap);


