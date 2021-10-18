import React from "react";

export default function DailyForecast({ day }) {
  return (
    <div>
      <div className="day-of-week">{day.day}</div>
      <div className="temp-range">
        Temperature : {day.forecast.min} - {day.forecast.max}
      </div>
      <div className="temp-range">Day : {day.forecast.dayState}</div>
      <div className="temp-range">Night : {day.forecast.nightState}</div>
    </div>
  );
}
