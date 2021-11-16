import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './testUtils';
import DataProfile from './DataProfile';
import '@testing-library/jest-dom';

test('rendering a component that uses useLocation', () => {
  const route = '/2643743';

  renderWithRouter(
    <DataProfile cityId="2643743" />,

    { route },
  );

  expect(screen.getByTestId('city')).toBeInTheDocument();
});
