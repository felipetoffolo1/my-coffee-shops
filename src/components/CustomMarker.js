import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

const Map = props => {
  console.log(props.place);
  return (
    <Marker
      onClick={() => props.onMarkerClick(props.place)}
      position={props.place.location}
    >
      {props.place.showInfo && (
        <InfoWindow>
          <h1>{props.place.title}</h1>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default Map;
