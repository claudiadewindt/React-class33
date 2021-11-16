import React, { useState } from 'react';
import DataProfile from './DataProfile';

function WeatherData({ weather, onSearch, setWeather }) {
  const [query, setQuery] = useState('');

  const validation = () => {
    if (query === '') {
      alert('Should input field has at least 1 character');
    }
  };

  if (!weather) {
    return <p>test something</p>;
  }

  return (
    <div>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validation();
            onSearch(query);
            setQuery('');
          }}
        >
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
