/* import { render, screen } from '@testing-library/react';
import CityWeather from '../CityWeather';

test('render City component', () => {
  const city = {
    countryCode: 'GB',
    weatherDescription: 'clear sky',
    lat: 51.5085,
    lon: -0.1257,
    main: 'Clouds',
    max: 10.73,
    min: 13.06,
    cityName: 'London',
  };
  render(<CityWeather data={city} />);
  const min = screen.getByText(/min temp/i);
  const max = screen.getByText(/max temp/i);
  const city_name = screen.getByText(/London/i);
  const countryCode = screen.getByText(/GB/i);
  const weatherDescription = screen.getByText(/clear sky/i);

  expect(min).toHaveTextContent('min temp: 10.73°');
  expect(max).toHaveTextContent('max temp: 13.06°');
  expect(city_name).toBeVisible();
  expect(countryCode).toBeVisible();
  expect(weatherDescription).toHaveTextContent('clear sky');
});
 */
