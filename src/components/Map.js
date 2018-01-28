import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from "./CustomMarker";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} center={props.defaultCenter}>
      {props.places.map(place => (
        <CustomMarker
          key={place.id}
          place={place}
          onMarkerClick={props.onMarkerClick}
        />
      ))}
    </GoogleMap>
  ))
);

export default Map;
