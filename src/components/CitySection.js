import React, { useEffect } from "react";
import { getCityWeather } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addData, addToFavorites, removeFromFavorites } from "../actions";

export default function CitySection() {
  //states
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    getCityWeather(city.key).then((res) => {
      dispatch(addData({ temperature: res }));
    });
  }, []);

  const handleFavorites = () => {};
  return (
    <div>
      <button onClick={handleFavorites}>
        {city.isSaved === true ? "remove from favorites" : "like!"}
      </button>
      <div className="city-name">
        <p>{city.name}</p>
      </div>
      <div className="degree">
        <p>{city.temperature}°</p>
      </div>
    </div>
  );
}
