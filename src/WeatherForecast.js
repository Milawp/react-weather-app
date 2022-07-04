import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import DailyWeatherForecast from "./DailyWeatherForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[1]} />
          </div>
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[2]} />
          </div>
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[3]} />
          </div>
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[4]} />
          </div>
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[5]} />
          </div>
          <div className="col-4 col-md-2">
            <DailyWeatherForecast data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6ba812e381c99fbb6a22f689f309c7f6";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let unit = "imperial";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
