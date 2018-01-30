import queryString from "query-string";
import { foursquareId, foursquareSecret } from "../constants/keys";
const foursquareUrl = "https://api.foursquare.com/v2/venues/explore";

export const getAvenue = (location, name) =>
  fetch(
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
  ).then(res => res.json());
