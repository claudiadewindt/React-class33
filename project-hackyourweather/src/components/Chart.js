import { useState, useEffect } from 'react';
import './Chart.css';

import { format } from 'date-fns';

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
  const [chartData, setChartData] = useState([]);
  const [cityName, setCityName] = useState('');
  const { cityId } = useParams();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

    async function fetchData() {
      try {
        const res = await fetch(url);
        const dailyForecast = await res.json();
        if (res.status !== 200) throw new Error(dailyForecast.message);
        setChartData(
          dailyForecast.list.map((threeHours) => {
            const { dt, main } = threeHours;
            return {
              date: format(new Date(dt * 1000), 'MMM dd'),
              time: format(new Date(dt * 1000), 'HH:mm'),
              temp: main.temp,
            };
          }),
        );

        setCityName(
          `${dailyForecast.city.name}, ${dailyForecast.city.country}`,
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [chartData, cityId]);

  return (
    <div className="chart">
      <h1>5 days forecast for </h1>
      <h2>{cityName}</h2>

      <AreaChart
        className="area-chart"
        width={800}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />

        <XAxis dataKey="date" stroke="purple" id="x-axis" tickCount={5} />
        <YAxis
          dataKey="temp"
          stroke={false}
          unit="°"
          type="number"
          tickCount="5"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temp"
          stroke="blue"
          strokeWidth="4"
          fill="blue"
        />
        <Area type="monotone" dataKey="time" />
      </AreaChart>

      <h4>
        <Link to="/"> Go To Home Page</Link>
      </h4>
    </div>
  );
};

export default Chart;
