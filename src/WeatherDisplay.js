import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FriendlyDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <span className="temp">{props.data.temp}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {props.data.feels}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
