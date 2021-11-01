const WeatherInformation = ({ city }) => {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };
  return (
    <>
      <h1>
        {city.name}, {city.sys.country}
      </h1>
      <h2>{city.weather[0].main}</h2>
      <h3>{city.weather[0].description}</h3>
      <br></br>
      <p>min temp : {kelvinToCelsius(city.main.temp_min)}</p>
      <p>max temp : {kelvinToCelsius(city.main.temp_max)}</p>
      <p>
        location : {city.coord.lon} , {city.coord.lat}
      </p>
    </>
  );
};

export default WeatherInformation;
