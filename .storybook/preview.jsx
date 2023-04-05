import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router';
import Layout from './Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const decorators = [
  (storyFn) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <Layout>{storyFn()}</Layout>
      </MemoryRouter>
    </QueryClientProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  viewport: { viewports: MINIMAL_VIEWPORTS },
  a11y: {
    element: '#root',
    manual: false,
  },
};
