import { googleKey } from "../constants/keys";
const geolocationUrl = "https://www.googleapis.com/geolocation/v1/geolocate";

export const returnCurrentLocation = () => {
  return fetch(`${geolocationUrl}&key=${googleKey}`, { method: "POST" }).catch(
    err => {
      err.text().then(errorMessage => {
        console.log(errorMessage);
      });
    }
  );
};
