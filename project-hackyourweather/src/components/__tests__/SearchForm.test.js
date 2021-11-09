import { render, fireEvent, screen } from '@testing-library/react';
import SearchForm from '../SearchForm';

test('renders the search form', async () => {
  const { getByRole } = render(<SearchForm />);

  const search_city = getByRole('button');

  fireEvent.click(screen.getByText('Search'));

  expect(search_city).toBeInTheDocument();
});
