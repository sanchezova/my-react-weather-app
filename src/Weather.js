import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Seattle",
    date: "Monday 10:00",
    description: "Cloudy",
    temperature: 9,
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control city"
              autoComplete="off"
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
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul className="description">
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img src={weatherData.imgUrl} className="icon" alt="weather icon" />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units"> °C | °F </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-elements">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
