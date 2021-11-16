import { render, fireEvent, screen } from '@testing-library/react';
import WeatherData from './WeatherData';

test('renders the search form', async () => {
  const { getByRole } = render(<WeatherData />);

  const search_city = getByRole('button');

  fireEvent.click(screen.getByText('Search'));

  expect(search_city).toBeInTheDocument();
});
