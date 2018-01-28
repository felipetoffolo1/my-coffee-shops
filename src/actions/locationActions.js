import { REQUEST_LOCATION } from "../constants/actions";
/** Called before a request for books is done */
export const requestLocation = location => {
  // Return action
  return {
    type: REQUEST_LOCATION,
    location: location
  };
};
