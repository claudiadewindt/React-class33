import { Link } from 'react-router-dom';

function DataProfile({ weather, setWeather }) {
  const removeCity = (id) => {
    setWeather(weather.filter((item) => item.city.id !== id));
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  return (
    <div>
      {weather.map((item) => {
        const cityId = item.city.id;

        return (
          <div key={cityId} className="list" data-testid="weather_card">
            <span
              onClick={() => removeCity(cityId)}
              className="remove-city"
              data-testid="remove_city"
            >
              x
            </span>
            <p>
              <Link to={`/${cityId}`} data-testid="to_city_button">
                {item.city.name} {item.city.country}
              </Link>
            </p>
            <p>{item.list[0].weather[0].main}</p>
            <p>{item.list[0].weather[0].description}</p>
            <p>min temp: {kelvinToCelsius(item.list[0].main.temp_min)}°C</p>
            <p>max temp: {kelvinToCelsius(item.list[0].main.temp_max)}°C</p>
          </div>
        );
      })}
      <main></main>
    </div>
  );
}

export default DataProfile;
