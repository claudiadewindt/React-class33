import React, { useState, useEffect } from 'react';
import DataProfile from './DataProfile';

function WeatherData() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState([]);

  useEffect(() => {}, [weather]);

  const getWeatherData = async (e) => {
    e.preventDefault();
    validation();
    setQuery('');

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
  const validation = () => {
    if (query === '') {
      alert('Should input field has at least 1 character');
    }
  };
  return (
    <div>
      <main>
        <form onSubmit={getWeatherData}>
          <input
            type="text"
            placeholder="&#x1F50E;&#xFE0E; Search City"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button className="btn">Search</button>

          {Object.entries(weather).length !== 0 ? (
            <DataProfile weather={weather} setWeather={setWeather} />
          ) : (
            <h3> Please Enter City Name </h3>
          )}
        </form>
      </main>
    </div>
  );
}

export default WeatherData;
