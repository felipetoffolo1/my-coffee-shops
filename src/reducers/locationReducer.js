export default (
  state = { current: { lat: -15.721751, lng: -48.0073978 } },
  action
) => {
  switch (action.type) {
    /**
     * Set the fetching to true
     */
    // case "REQUEST_BOOKS":
    //   return Object.assign({}, state, { isFetching: true });
    default:
      return state;
  }
};
