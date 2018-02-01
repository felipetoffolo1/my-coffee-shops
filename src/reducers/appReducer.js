import { TOGGLE_MENU } from "../constants/actions";

export default (state = { showMenu: true }, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, { showMenu: !state.showMenu });
    default:
      return state;
  }
};
