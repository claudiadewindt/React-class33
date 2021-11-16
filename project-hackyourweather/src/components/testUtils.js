import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, options) => {
  // window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: MemoryRouter, ...options });
};

export default renderWithRouter;
