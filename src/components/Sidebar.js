import React from "react";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { withScriptjs } from "react-google-maps";

let Sidebar = withScriptjs(props => {
  var searchBox;
  return (
    <ul className="vertical menu cell medium-4 large-2">
      <StandaloneSearchBox
        ref={ref => {
          searchBox = ref;
        }}
        onPlacesChanged={() => {
          const places = searchBox.getPlaces();
          props.onPlacesChanged(places);
        }}
      >
        <input type="text" placeholder="Customized your placeholder" />
      </StandaloneSearchBox>
      {props.places.map(place => (
        <li key={place.title}>
          <a onClick={() => props.onMarkerClick(place)}>{place.title}</a>
        </li>
      ))}
    </ul>
  );
});

export default Sidebar;