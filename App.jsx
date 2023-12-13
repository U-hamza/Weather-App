import React, { useState } from "react";
import axios from "axios";

import clearIcon from "./Assests/clear.png";
import cloudIcon from "./Assests/clouds.png";
import drizzleIcon from "./Assests/drizzle.png";
import humidityIcon from "./Assests/humidity.png";
import rainIcon from "./Assests/rain.png";
import searchIcon from "./Assests/search.png";
import snowIcon from "./Assests/snow.png";
import windIcon from "./Assests/wind.png";

function App() {
  let api_key = "7536cff14feca3a942164bfc9df6779c";

  const [wicon, setWicon] = useState(cloudIcon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);

    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clearIcon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloudIcon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzleIcon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzleIcon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rainIcon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rainIcon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snowIcon);
    } else {
      setWicon(clearIcon);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="weather-img">
          <img src={wicon} alt="" />
        </div>
        <div className="weather-temp"> 24°c</div>
        <div className="location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidityIcon} className="icon" />
            <div className="data">
              <div className="humidity">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} className="icon" />
            <div className="data">
              <div className="wind">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
