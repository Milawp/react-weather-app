import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios, { Axios } from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let unit = "metric";
  let apiKey = "6ba812e381c99fbb6a22f689f309c7f6";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

  axios.get(apiURL).then(handleResponse);

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
