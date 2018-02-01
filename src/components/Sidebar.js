import React from "react";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { withScriptjs } from "react-google-maps";

/** Sidebar component */
let Sidebar = withScriptjs(props => {
  var searchBox;
  return (
    <div>
      <ul className="vertical menu" id="places-menu" data-toggler=".hide">
        <StandaloneSearchBox
          ref={ref => {
            searchBox = ref;
          }}
          bounds={props.bounds}
          onPlacesChanged={() => {
            const places = searchBox.getPlaces();
            props.onPlacesChanged(places);
          }}
        >
          <input type="text" placeholder="What is your favorite coffee shop?" />
        </StandaloneSearchBox>
        {/* Add each added place */}
        {props.places.map(place => (
          <li key={place.title}>
            <a onClick={() => props.onMarkerClick(place)}>{place.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Sidebar;
