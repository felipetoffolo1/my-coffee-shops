import { TOGGLE_INFOWINDOW, ADD_PLACE, GET_PLACES } from "../constants/actions";
import * as firebase from "firebase";
/** Called before a request for books is done */
export const toggleInfoWindow = place => {
  // Return action
  return {
    type: TOGGLE_INFOWINDOW,
    place: place
  };
};
export const addPlace = places => {
  return {
    type: ADD_PLACE,
    places: places
  };
};
export const getPlaces = () => {
  return {
    type: GET_PLACES
  };
};
