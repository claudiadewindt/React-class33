import React from 'react';

function Forecast({ general, details, location }) {
  const cityLocation = `${location.lat}, ${location.lon}`;

  return (
    <>
      <div className="general-forecast">
        <h3 data-testid="condition">
          <strong>{general.main}</strong>
        </h3>
        <p data-testid="condition">{general.description}</p>
      </div>
      <div className="forecast-details">
        <ul>
          <li>
            <p data-testid="min">min temp : {details.temp_min}</p>
          </li>
          <li>
            <p data-testid="max">max temp : {details.temp_max}</p>
          </li>
          <li>
            <p data-testid="location">location : {cityLocation}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Forecast;
