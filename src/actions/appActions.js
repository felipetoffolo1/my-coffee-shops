import { TOGGLE_MENU } from "../constants/actions";
/** Called before a request for books is done */
export const toggleMenu = bounds => {
  // Return action
  return {
    type: TOGGLE_MENU
  };
};
