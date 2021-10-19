const cityReducer = (
  state = { label: "Tel Aviv / Israel", key: 215854 },
  action
) => {
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
