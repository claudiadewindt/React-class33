import { fireEvent } from '@testing-library/react';
import React from 'react';
import renderWithRouter from './testUtils';
import DataProfile from './DataProfile';
import '@testing-library/jest-dom';

const mockCity = [
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

describe('DataProfile', () => {
  test('rendering a component that uses useLocation', () => {
    const { getByTestId, getByText } = renderWithRouter(
      <DataProfile weather={mockCity} setWeather={() => {}} />,
    );

    expect(getByTestId('weather_card')).toBeInTheDocument();
    expect(getByText('Amsterdam NL')).toBeInTheDocument();
    expect(getByText('Clouds')).toBeInTheDocument();
    expect(getByText('broken clouds')).toBeInTheDocument();
    expect(getByText('min temp: 5.2°C')).toBeInTheDocument();
    expect(getByText('max temp: 7.1°C')).toBeInTheDocument();
  });

  test('removing a city calls the remove function', () => {
    const setWeatherMock = jest.fn(() => {});
    const { getByTestId } = renderWithRouter(
      <DataProfile weather={mockCity} setWeather={setWeatherMock} />,
    );

    const button = getByTestId('remove_city');

    expect(setWeatherMock).not.toHaveBeenCalled();

    fireEvent.click(button);

    expect(setWeatherMock).toHaveBeenCalledWith([]);
  });

  test('clicking on a city goes to that cities route', () => {
    const { getByTestId } = renderWithRouter(
      <DataProfile weather={mockCity} setWeather={() => {}} />,
    );

    const link = getByTestId('to_city_button');

    expect(link).toHaveAttribute('href');
    expect(link.href).toContain('2759794');
  });
});
