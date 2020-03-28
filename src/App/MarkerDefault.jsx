import React from 'react';
import { Marker } from "react-leaflet";

export default function MarkerDefault(props) {
    const initMarker = ref => {
        if (ref) {
            ref.leafletElement.openPopup();
        }
    }
    return <Marker ref={initMarker} {...props} />
}