import weatherData from '../city-weather.json';
import WeatherInformation from './WeatherInformation';

const CityWeather = () => {
  return (
    <ul className="city-list">
      {weatherData.map((city) => (
        <li key={city.sys.id} className="city">
          <WeatherInformation city={city} />
        </li>
      ))}
    </ul>
  );
};

export default CityWeather;
