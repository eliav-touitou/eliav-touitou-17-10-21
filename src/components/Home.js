import React, { useState, useEffect } from "react";
import CitySection from "./CitySection";
import Forecast from "./Forecast";
import { addData, setCity } from "../actions";
import { getCityWeather, getCityKey, getCityForecast } from "../utils";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [search, setSearch] = useState("");
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const searchCity = () => {
    console.log(search);
    getCityKey(search)
      .then((key) => {
        dispatch(
          setCity({
            name: search,
            key: key,
          })
        );
      })
      .catch((err) => console.log(err));
    getCityWeather(city.key).then((res) => {
      dispatch(addData({ temperature: res }));
    });
  };

  // useEffect(() => {
  // }, [city]);

  // useEffect(() => {
  //   getCityForecast(city.key).then((res) => {
  //     res.forEach((day) => dispatch(addData(day)));
  //   });
  // }, [city]);

  return (
    <div>
      <div className="search-section">
        <input onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchCity}>search!</button>
      </div>
      <CitySection />
      <Forecast />
    </div>
  );
}
