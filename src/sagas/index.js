import { put, takeEvery, fork, all, select, call } from "redux-saga/effects";
import {
  REQUEST_LOCATION,
  RECEIVE_LOCATION,
  ADD_PLACE,
  SET_PLACE,
  GET_PLACES
} from "../constants/actions";
import { getSavedPlaces, putPlaces } from "../api/Firebase";

export const requestLocation = function*(action) {
  const location = {
    lat: action.location.latitude,
    lng: action.location.longitude
  };
  yield put({ type: RECEIVE_LOCATION, location: location });
};
export const setPlace = function*(action) {
  const state = yield select();
  const places = state.markers.places;
  const placesToAdd = action.places.map(place => {
    let newPlace = {
      id: place.id,
      title: place.name,
      location: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      showInfo: false
      // googleData: place
    };
    return newPlace;
  });
  const mergedPlaces = places.concat(placesToAdd);
  yield call(putPlaces, placesToAdd);
  yield put({ type: SET_PLACE, places: mergedPlaces });
};
export const getPlaces = function*(action) {
  const places = yield call(getSavedPlaces);
  yield put({ type: SET_PLACE, places: places.val() });
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
