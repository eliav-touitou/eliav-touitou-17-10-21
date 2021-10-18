import React, { useEffect } from "react";
import { getCityForecast } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../actions";
import DailyForecast from "./DailyForecast";
export default function CitySection() {
  //states
  const city = useSelector((state) => state.city);

  return (
    <div>
      {city.forecast?.map((day, i) => (
        <DailyForecast key={`day-${i}`} day={day} />
      ))}
    </div>
  );
}
