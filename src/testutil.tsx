import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import type * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const wrapper: React.FunctionComponent = function ({ children }) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

export const renderWithRoute = (
  ui: React.ReactElement,
  { route = '/' } = {}
): RenderResult => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper });
};
