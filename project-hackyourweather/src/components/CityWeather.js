const CityWeather = ({ city }) => {
  const {
    name,
    sys: { country },
    weather: [{ main: weatherMain, description: weatherDescription }],
    main: { temp_min, temp_max },
    coord,
  } = city;

  return (
    <section className="city">
      <h2
        data-testid="city-and-country"
        id="header-search"
      >{`${name}, ${country}`}</h2>
      <h3>{weatherMain}</h3>
      <p>{weatherDescription}</p>
      <p>min temp: {temp_min}</p>
      <p>max temp: {temp_max}</p>
      <p>location: {`${coord.lon}, ${coord.lat}`}</p>
    </section>
  );
};

export default CityWeather;
