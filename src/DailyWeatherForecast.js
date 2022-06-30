import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyWeatherForecast(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-img">
        <WeatherIcon code={props.data.weather[0].icon} size={45} />
      </div>
      <div className="WeatherForecast-mix-max-temp">
        <span className="WeatherForecast-max">{maxTemp()}</span>°{""}
        <span className="WeatherForecast-min">{minTemp()}</span>°
      </div>
    </div>
  );
}
