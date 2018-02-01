import { REQUEST_LOCATION, SET_BOUNDS } from "../constants/actions";
/**  Request a location info */
export const requestLocation = location => {
  return {
    type: REQUEST_LOCATION,
    location: location
  };
};
//Set map bounds
export const setBounds = bounds => {
  // Return action
  return {
    type: SET_BOUNDS,
    bounds: bounds
  };
};
