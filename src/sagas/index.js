import { put, takeEvery, fork, all, select, call } from "redux-saga/effects";
import {
  REQUEST_LOCATION,
  RECEIVE_LOCATION,
  ADD_PLACE,
  SET_PLACE,
  GET_PLACES
} from "../constants/actions";
import { getSavedPlaces, putPlaces } from "../api/Firebase";
import { getAvenue } from "../api/Foursquare";

export const requestLocation = function*(action) {
  const location = {
    lat: action.location.latitude,
    lng: action.location.longitude
  };
  yield put({ type: RECEIVE_LOCATION, location: location });
};

/**
 * Set a new place on the state
 * @param {*} action
 */
export const setPlace = function*(action) {
  // get current places
  const state = yield select();
  const places = state.markers.places.slice();
  // get info of place to add
  const place = action.places[0];
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  const name = place.name;
  // Async request for foursquare data
  const fsAvenues = yield call(getAvenue, `${lat},${lng}`, name);
  const fsAvenue = fsAvenues.response.groups[0].items[0];
  const placeExist = places.filter(
    existedPlace => existedPlace.id === place.id
  );
  if (placeExist.length >= 0) {
    // Merge google and foursquare data in our structure
    let newPlace = {
      id: place.id,
      title: place.name,
      address: place.formatted_address,
      location: {
        lat: lat,
        lng: lng
      },
      rating: {
        foursquare: {
          value: fsAvenue.venue.rating ? fsAvenue.venue.rating : ""
        },
        google: {
          value: place.rating
        }
      },
      website: place.website ? place.website : "",
      price: fsAvenue.venue.price,
      contact: fsAvenue.venue.contact,
      showInfo: false,
      photo: {
        url: place.photos[0].getUrl({ maxWidth: 500, maxHeight: 500 }),
        width: place.photos[0].width,
        height: place.photos[0].height
      }

      // googleData: place
    };
    places.push(newPlace);
  }

  yield call(putPlaces, places);
  yield put({ type: SET_PLACE, places: places });
};

// Get places saved on firebase
export const getPlaces = function*(action) {
  const places = yield call(getSavedPlaces);
  yield put({
    type: SET_PLACE,
    places: places.val() && Array.isArray(places.val()) ? places.val() : []
  });
};

export function* watchLocationRequests() {
  yield takeEvery(REQUEST_LOCATION, requestLocation);
}
export function* watchMarkersRequests() {
  yield takeEvery(ADD_PLACE, setPlace);
  yield takeEvery(GET_PLACES, getPlaces);
}

export default function* root() {
  yield all([fork(watchLocationRequests), fork(watchMarkersRequests)]);
}
