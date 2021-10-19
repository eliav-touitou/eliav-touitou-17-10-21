import React, { useEffect, useState } from "react";
import { removeFromFavorites, addData, setCity } from "../actions";
import { useDispatch } from "react-redux";
import { getCityWeather } from "../utils";
import { Link } from "react-router-dom";

export default function SavedCity({ city }) {
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(15);

  useEffect(() => {
    getCityWeather(city.key)
      .then((res) => setWeather(res))
      .catch((err) => setWeather("-"));
  }, []);

  const remove = () => {
    dispatch(removeFromFavorites(city.key));
    dispatch(addData({ isSaved: false }));
  };

  return (
    <li className="active">
      <Link
        exact
        to="/"
        onClick={() => dispatch(setCity({ ...city, isSaved: true }))}
      >
        <span className="day-name">{city.label}</span>
        <span className="day-temp">{weather}°C</span>

        <button className="location-button" onClick={remove}>
          <span>Delete</span>
        </button>
      </Link>
    </li>
  );
}
