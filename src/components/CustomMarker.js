import React from "react";
import { Marker } from "react-google-maps";
import CustomInfoWindow from "./CustomInfoWindow";
/**
 * Custom marker for the project
 * @param {*} props
 */
const CustomMarker = props => {
  return (
    <Marker
      onClick={() => props.onMarkerClick(props.place)}
      position={props.place.location}
    >
      {props.place.showInfo && <CustomInfoWindow place={props.place} />}
    </Marker>
  );
};

export default CustomMarker;
