import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import CityWeather from './components/CityWeather';

function App() {
  const [city, setCity] = useState({});
  return (
    <div className="container">
      <h1>Weather</h1>

      <main className="content">
        <SearchForm setCity={setCity} />
        {city?.cod &&
          (city.cod === 200 ? (
            <CityWeather city={city} />
          ) : (
            <p>Please enter a valid city name!</p>
          ))}
      </main>
    </div>
  );
}

export default App;
