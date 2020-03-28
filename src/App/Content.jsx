import React from 'react';
import { Popup } from "react-leaflet";

export default function Content(props) {
    return (
        <Popup>
            <span style={{ color: props.corTexto, fontSize: "16px" }}>
                Nascimento  
            </span>
        </Popup>
    )
}