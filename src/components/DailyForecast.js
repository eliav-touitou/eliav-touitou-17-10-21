import React from "react";

export default function DailyForecast({ day }) {
  return (
    //   <div className="temp-range">Day : {day.forecast.dayState}</div>
    //   <div className="temp-range">Night : {day.forecast.nightState}</div>
    // </div>
    <li className="active">
      <i className="day-icon" data-feather="sun" />
      <span className="day-name">{day.day}</span>
      <span className="day-temp">
        {day.forecast.min}°C - {day.forecast.max}°C
      </span>
    </li>
  );
}
