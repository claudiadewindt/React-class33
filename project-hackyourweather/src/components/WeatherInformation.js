const WeatherInformation = ({ city }) => {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };

  const cityName = city.city.name;
  const countryCode = city.city.country;
  const maxTemp = city.list[0].main.temp_max;
  const minTemp = city.list[0].main.temp_min;
  const weatherMain = city.list[0].weather[0].main;

  const weatherDescription = city.list[0].weather[0].description;
  const location = `${city.city.coord.lat}, ${city.city.coord.lon}`;

  return (
    <>
      <h2 data-testid="city">
        {cityName}, {countryCode}
      </h2>
      <h3>{weatherMain}</h3>
      <p>{weatherDescription}</p>
      <br></br>
      <p>min temp : {kelvinToCelsius(minTemp)}</p>
      <p>max temp : {kelvinToCelsius(maxTemp)}</p>
      <p>location : {location}</p>
    </>
  );
};

export default WeatherInformation;
