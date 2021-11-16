import { screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './testUtils';
import '@testing-library/jest-dom';

import Chart from './Chart';

test('rendering a component that uses useLocation', () => {
  const route = '/2643743';

  renderWithRouter(
    <Chart cityId="2643743" />,

    { route },
  );

  expect(screen.getByTestId('city')).toBeInTheDocument();
});
