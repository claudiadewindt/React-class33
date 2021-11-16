import { useState, useEffect } from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useParams, Link } from 'react-router-dom';

const Chart = () => {
  const [city, setCity] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const { cityId } = useParams();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data.list);
        setCity(data.city);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, [cityId]);

  return (
    <>
      <header className="title">
        <h1>5 days Forecast</h1>
      </header>
      <main className="container">
        <h1 data-testid="city">
          {city.name} , {city.country}
        </h1>

        <AreaChart
          className="chart"
          data-testid="chart"
          width={750}
          height={500}
          data={weatherData}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            name="temp"
            dataKey="main.temp"
            stroke="#8554d8"
            fill="#8714d8"
          />
        </AreaChart>
        <h4>
          <Link to="/"> Go To Home Page</Link>
        </h4>
      </main>
    </>
  );
};

export default Chart;
