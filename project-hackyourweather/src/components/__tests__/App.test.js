import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the landing page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByText('Search')).toBeInTheDocument();
});
