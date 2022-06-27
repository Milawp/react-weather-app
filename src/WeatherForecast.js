import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-img">
            <WeatherIcon code="04d" size={45} />
          </div>
          <div className="WeatherForecast-mix-max-temp">
            <span className="WeatherForecast-max">19</span>°{""}
            <span className="WeatherForecast-min">10</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
