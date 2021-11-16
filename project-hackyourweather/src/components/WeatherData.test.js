import { render, fireEvent, screen } from '@testing-library/react';
import WeatherData from './WeatherData';
import { BrowserRouter as Router } from 'react-router-dom';

const mockWeather = [
  {
    city: {
      country: 'NL',
      id: 2759794,
      name: 'Amsterdam',
    },
    list: [
      {
        weather: [
          {
            main: 'Clouds',
            description: 'broken clouds',
          },
        ],
        main: {
          temp_max: 280.28,
          temp_min: 278.32,
        },
      },
    ],
  },
];

test('renders test something if weather is undefined', async () => {
  render(<WeatherData />);

  expect(screen.getByText('test something')).toBeInTheDocument();
});

test('renders the search form if weather exist', async () => {
  render(
    <Router>
      <WeatherData weather={mockWeather} onSearch={() => ''} />
    </Router>,
  );

  const search_city = screen.getByRole('button');

  fireEvent.click(screen.getByText('Search'));

  expect(search_city).toBeInTheDocument();
});
