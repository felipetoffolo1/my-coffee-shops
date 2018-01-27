import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import CustomMarker from "./CustomMarker";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={props.defaultCenter}>
      {props.places.map(place => (
        <CustomMarker key={place.location} place={place} />
      ))}
    </GoogleMap>
  ))
);

export default Map;
