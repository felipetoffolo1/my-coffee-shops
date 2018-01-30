import { TOGGLE_MENU } from "../constants/actions";

export default (state = { showMenu: true }, action) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    case TOGGLE_MENU:
      return Object.assign({}, state, { showMenu: !state.showMenu });
    // case SET_BOUNDS:
    //   return Object.assign({}, state, { bounds: action.bounds });
    default:
      return state;
  }
};
