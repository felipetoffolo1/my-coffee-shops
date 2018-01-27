import { TOGGLE_INFOWINDOW, ADD_PLACE } from "../constants/actions";

export default (
  state = {
    places: [
      {
        title: "Ernesto Café",
        location: { lat: -15.8306611, lng: -47.9264053 },
        googleData: {},
        showInfo: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case TOGGLE_INFOWINDOW:
      const newPlaces = state.places.map(place => {
        action.place.title === place.title
          ? (place.showInfo = !place.showInfo)
          : (place.showInfo = false);
        return place;
      });
      return Object.assign({}, state, { places: newPlaces });
    case ADD_PLACE:
      const placesToAdd = action.places.map(place => {
        let newPlace = {
          title: place.name,
          location: place.geometry.location,
          showInfo: false,
          googleData: place
        };
        return newPlace;
      });
      const mergedPlaces = state.places.concat(placesToAdd);
      return Object.assign({}, state, { places: mergedPlaces });
    default:
      return state;
  }
};
