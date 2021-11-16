import React, { useState } from 'react';
import WeatherData from './WeatherData';

function WeatherDataController() {
  const [weather, setWeather] = useState([]);

  const getWeatherData = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query},&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      const weatherData = await response.json();

      setWeather((weather) => [...weather, weatherData]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WeatherData
      weather={weather}
      onSearch={getWeatherData}
      setWeather={setWeather}
    />
  );
}

export default WeatherDataController;
