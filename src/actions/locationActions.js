import { REQUEST_LOCATION, SET_BOUNDS } from "../constants/actions";
/** Called before a request for books is done */
export const requestLocation = location => {
  // Return action
  return {
    type: REQUEST_LOCATION,
    location: location
  };
};
export const setBounds = bounds => {
  // Return action
  return {
    type: SET_BOUNDS,
    bounds: bounds
  };
};
