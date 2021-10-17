import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  favorites: favoritesReducer,
});
export default rootReducer;
