import React from 'react';
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function MarkerDefault(props) {

    var greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

    const initMarker = ref => {
        if (ref) {
            ref.leafletElement.openPopup();
        }
    }
    return <Marker ref={initMarker} {...props} icon={greenIcon} />
}