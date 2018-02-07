/*global google*/

import {
  TOGGLE_INFOWINDOW,
  SET_PLACE,
  FILTER_PLACES
} from "../constants/actions";

export default (
  state = {
    places: [],
    filteredPlaces: []
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_INFOWINDOW:
      const newPlaces = state.filteredPlaces.map(place => {
        if (action.place.title === place.title) {
          place.showInfo = !place.showInfo;
          place.animation = google.maps.Animation.DROP;
        } else {
          place.showInfo = false;
          place.animation = "";
        }
        return place;
      });
      return Object.assign({}, state, { filteredPlaces: newPlaces });
    case SET_PLACE:
      return Object.assign({}, state, {
        places: action.places,
        filteredPlaces: action.places
      });
    case FILTER_PLACES:
      const filteredPlaces = state.places.filter(place => {
        return (
          place.title.toLowerCase().search(action.value.toLowerCase()) !== -1
        );
      });
      return Object.assign({}, state, {
        filteredPlaces: filteredPlaces
      });
    default:
      return state;
  }
};
