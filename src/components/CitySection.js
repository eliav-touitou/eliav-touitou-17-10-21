import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addToFavorites, removeFromFavorites } from "../actions";

export default function CitySection() {
  //states
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleFavorites = () => {
    if (city.isSaved) {
      dispatch(removeFromFavorites(city.key));
      dispatch(addData({ isSaved: false }));
    } else {
      dispatch(addToFavorites({ label: city.label, key: city.key }));
      dispatch(addData({ isSaved: true }));
    }
  };
  return (
    <div className="weather-side">
      <div className="weather-gradient" />
      <button
        onClick={() => handleFavorites()}
        className="location-button"
        id="save-btn"
      >
        <span>{city.isSaved === true ? "remove from favorites" : "like!"}</span>
      </button>
      <div className="date-container">
        <h2 className="date-dayname">{city.label}</h2>
        <span className="date-day">
          {new Date().toString().split(" ").splice(1, 3).join(" ")}
        </span>
      </div>
      <div className="weather-container">
        <h1 className="weather-temp">{weather.degrees}°C</h1>
      </div>
    </div>
  );
}
