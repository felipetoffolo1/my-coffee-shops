import { TOGGLE_INFOWINDOW, ADD_PLACE, GET_PLACES } from "../constants/actions";
import * as firebase from "firebase";
/** Called before a request for books is done */
export const toggleInfoWindow = place => {
  // Toggle infowindow visibilty for a marker
  return {
    type: TOGGLE_INFOWINDOW,
    place: place
  };
};
// Add a new place to the map
export const addPlace = places => {
  return {
    type: ADD_PLACE,
    places: places
  };
};
// Get saved places
export const getPlaces = () => {
  return {
    type: GET_PLACES
  };
};
