import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, options) => {
  return render(ui, { wrapper: MemoryRouter, ...options });
};

export default renderWithRouter;
