import queryString from "query-string";
import { foursquareId, foursquareSecret } from "../constants/keys";
const foursquareUrl = "https://api.foursquare.com/v2/venes/explore";

/**
 * Get the avenue
 * @param {object} location - lat and lng of the place
 * @param {*} name  - name of the place to find
 * returns {object} - Object with aoll possible avenues
 */
export const getAvenue = (location, name) => {
  try {
    return fetch(
      foursquareUrl +
        "?" +
        queryString.stringify({
          client_id: foursquareId,
          client_secret: foursquareSecret,
          ll: location,
          query: name,
          v: "20170801",
          limit: 1
        }),
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .catch(err => {
        err.text().then(errorMessage => {
          alert(errorMessage);
        });
      });
  } catch (error) {
    console.log(error);
  }
};
