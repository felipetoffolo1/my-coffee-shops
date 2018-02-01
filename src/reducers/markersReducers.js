import { TOGGLE_INFOWINDOW, SET_PLACE } from "../constants/actions";

export default (
  state = {
    places: []
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_INFOWINDOW:
      const newPlaces = state.places.map(place => {
        action.place.title === place.title
          ? (place.showInfo = !place.showInfo)
          : (place.showInfo = false);
        return place;
      });
      return Object.assign({}, state, { places: newPlaces });
    case SET_PLACE:
      return Object.assign({}, state, { places: action.places });
    default:
      return state;
  }
};
