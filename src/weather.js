import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      currentMin: Math.round (response.data.main.temp_min) ,
      currentMax:Math.round (response.data.main.temp_max)  ,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6ba812e381c99fbb6a22f689f309c7f6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
                onChange={handleUpdateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDisplay data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
