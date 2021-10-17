const cityReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CITY":
      return action.payload;
    case "ADD_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default cityReducer;
