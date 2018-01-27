import { combineReducers } from "redux";
import location from "./locationReducer";
import markers from "./markersReducers";

/**
 * Combiner for all the reducers
 */
export default combineReducers({
  location,
  markers
});
