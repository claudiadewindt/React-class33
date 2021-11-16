import { Link } from 'react-router-dom';

function DataProfile({ weather, setWeather }) {
  const removeCity = () => {
    setWeather({});
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  return (
    <div>
      {weather.map((item) => {
        return (
          <div className="list" data-testid="weather_card">
            <span onClick={removeCity} className="remove-city">
              x
            </span>
            <p>
              <Link to={`/${item.city.id}`}>
                {item.city.name} {item.city.country}
              </Link>
            </p>
            <p>{item.list[0].weather[0].main}</p>
            <p>{item.list[0].weather[0].description}</p>
            <p>min temp: {kelvinToCelsius(item.list[0].main.temp_min)}°C</p>
            <p>max temp : {kelvinToCelsius(item.list[0].main.temp_max)}°C</p>
          </div>
        );
      })}
      <main></main>
    </div>
  );
}

export default DataProfile;
