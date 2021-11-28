import CityCard from './CityCard';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import SearchForm from './SearchForm';

function WeatherPage() {
  const [citySearched, setCitySearched] = useState('');
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citySearched}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const fetchData = await fetch(url);
      let res = await fetchData.json();
      if (fetchData.status !== 200 || !fetchData.ok) {
        setErrMsg(res.message);
        throw new Error(res.message);
      } else {
        res.card_id = uuid();
        console.log(url);
        setCityWeather([res, ...cityWeather]);
        setErrMsg(null);
        setCitySearched('');
      }
    } catch (error) {
      console.log(error.stack);
      setErrMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <SearchForm
        citySearched={citySearched}
        setCitySearched={setCitySearched}
        search={fetchWeather}
        setErrMsg={setErrMsg}
      />
      {errMsg && <h3 className="err">{errMsg}</h3>}
      {isLoading && <h3 className="load">Loading...</h3>}
      <CityCard cityWeather={cityWeather} setCityWeather={setCityWeather} />
    </div>
  );
}

export default WeatherPage;
