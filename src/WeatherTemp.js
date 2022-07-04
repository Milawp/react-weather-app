import React from "react";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="temp">{props.temp}</span>
      <span className="unit">°F  </span>
    </span>
  );
}
