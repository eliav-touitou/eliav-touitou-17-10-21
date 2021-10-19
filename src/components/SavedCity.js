import React, { useEffect, useState } from "react";
import { removeFromFavorites, addData, setCity } from "../actions";
import { useDispatch, useSelector } from "react-redux";
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
      <div onClick={dispatch(setCity(city))}>
        <Link exact to="/">
          <i className="day-icon" data-feather="sun" />
          <span className="day-name">{city.label}</span>
          <span className="day-temp">{weather}°C</span>

          <button className="location-button" onClick={remove}>
            <span>Delete</span>
          </button>
        </Link>
      </div>
    </li>
  );
}
