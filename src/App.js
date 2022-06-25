import React from "react";
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tulsa" />
        <p>
          This project was coded by{" "}
          <a href="https://WWW.milawp.com" target="_blank" rel="noreferrer">
            Mila WP
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Milawp/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced.
          </a>
        </p>
      </div>
    </div>
  );
}
