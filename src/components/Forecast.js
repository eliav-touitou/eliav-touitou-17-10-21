import React, { useEffect } from "react";
import { getCityForecast } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import DailyForecast from "./DailyForecast";
import { addData, addToFavorites, removeFromFavorites } from "../actions";

export default function CitySection() {
  //states
  const forecast = useSelector((state) => state.forecast);
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const handleFavorites = () => {
    if (city.isSaved) {
      dispatch(removeFromFavorites(city.key));
      dispatch(addData({ isSaved: false }));
    } else {
      dispatch(addToFavorites({ label: city.name, key: city.key }));
      dispatch(addData({ isSaved: true }));
    }
  };

  return (
    <>
      <div className="week-container">
        <ul className="week-list">
          {forecast.forecast?.map((day, i) => (
            <DailyForecast key={`day-${i}`} day={day} />
          ))}
        </ul>
      </div>
    </>
  );
}
