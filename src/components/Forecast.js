import React from "react";
import { useSelector } from "react-redux";
import DailyForecast from "./DailyForecast";

export default function CitySection() {
  //states
  const forecast = useSelector((state) => state.forecast);

  return (
    <>
      <div className="week-container">
        <ul className="week-list">
          {forecast.forecast?.map((day, i) => (
            <DailyForecast key={`day-${day.day}`} day={day} />
          ))}
        </ul>
      </div>
    </>
  );
}
