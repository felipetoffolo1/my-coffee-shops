import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

const CustomInfoWindow = props => {
  return (
    <InfoWindow>
      <div>
        <h3>{props.place.title}</h3>
        {props.place.rating.foursquare.value && (
          <h5>{props.place.rating.foursquare.value}</h5>
        )}
        {props.place.rating.google && (
          <h5>{props.place.rating.google.value}</h5>
        )}
        {props.place.website && (
          <h5>
            Website:<a target="_blank" href={props.place.website}>
              {props.place.website}
            </a>
          </h5>
        )}
        <ul>
          {props.place.contact &&
            Object.keys(props.place.contact).map(key => (
              <li>{`${key}: ${props.place.contact[key]}`}</li>
            ))}
        </ul>
      </div>
    </InfoWindow>
  );
};

export default CustomInfoWindow;
