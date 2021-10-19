export const setCity = (obj) => {
  return {
    type: "SET_CITY",
    payload: obj,
  };
};
export const addToFavorites = (obj) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: obj,
  };
};
export const removeFromFavorites = (num) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: num,
  };
};
export const addData = (obj) => {
  return {
    type: "ADD_DATA",
    payload: obj,
  };
};
export const setWeather = (obj) => {
  return {
    type: "SET_WEATHER",
    payload: obj,
  };
};
export const setForecast = (obj) => {
  return {
    type: "SET_FORECAST",
    payload: obj,
  };
};
