import React from "react";

export default function DailyForecast({ day }) {
  return (
    <li className="active">
      <i className="day-icon" data-feather="sun" />
      <span className="day-name">{day.day}</span>
      <span className="day-temp">
        {day.forecast.min}°C - {day.forecast.max}°C
      </span>
    </li>
  );
}
