import React, { useState, useEffect } from "react";
import CitySection from "./CitySection";
import Forecast from "./Forecast";
import { addData } from "../actions";
import { getCityWeather, getCityForecast } from "../utils";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [search, setSearch] = useState("");
  const city = useSelector((state) => state.city);

  const dispatch = useDispatch();

  useEffect(() => {
    getCityWeather(city.key).then((res) => {
      dispatch(addData({ temperature: res }));
    });
  }, []);

  // useEffect(() => {
  //   getCityForecast(city.key).then((res) => {
  //     res.forEach((day) => dispatch(addData(day)));
  //   });
  // }, [city]);

  return (
    <div>
      <div className="search-section">
        <input onChange={(e) => setSearch(e.target.value)} />
        <button>search!</button>
      </div>
      <CitySection />
      <Forecast />
    </div>
  );
}
