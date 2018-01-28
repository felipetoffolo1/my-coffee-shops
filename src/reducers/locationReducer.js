import { RECEIVE_LOCATION } from "../constants/actions";

export default (
  state = { current: { lat: -19.721751, lng: -48.0073978 } },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case RECEIVE_LOCATION:
      return Object.assign({}, state, { current: action.location });
    default:
      return state;
  }
};
