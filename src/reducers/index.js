import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import favoritesReducer from "./favoritesReducer";
import forecastReducer from "./forecastReducer";
import weatherReducer from "./weatherReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  favorites: favoritesReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
  errorExisting: errorReducer,
});
export default rootReducer;
