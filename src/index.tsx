import 'neuicons';
import './index.css';
import 'focus-visible';
import './analytics/initAnalytics';

import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ReachPortal from '@reach/portal';
import { Amplify } from 'aws-amplify';
import * as ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary as ErrorBoundaryImpl } from '@/components/ErrorBoundaries/ErrorBoundary';
import { SummarisationContextProvider } from '@/context/SummarisationContext';
import { useResponsiveConstants } from '@/hooks/responsive/useResponsiveConstants';

import authVariable from './amplify';
import { queryClient } from './query-client';
import App from './routes';
import { theme } from './theme/theme';

async function prepare() {
  if (import.meta.env.DEV) {
    return import('./mocks/browser').then(({ default: mocks }) => {
      return mocks.start({ onUnhandledRequest: 'bypass' });
    });
  } else {
    return new Promise<null>((resolve) => {
      Amplify.configure({
        Auth: authVariable,
      });

      resolve(null);
    });
  }
}

const Main = () => {
  const { mobile } = useResponsiveConstants();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <SummarisationContextProvider>
              <App />
              <ReachPortal>
                <Toaster
                  position='bottom-center'
                  reverseOrder={false}
                  toastOptions={{
                    duration: 8000,
                    ...(mobile && { style: { marginBottom: '70px' } }),
                  }}
                />
              </ReachPortal>
            </SummarisationContextProvider>
          </MuiPickersUtilsProvider>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

prepare().then(() => {
  ReactDOM.render(
    <ErrorBoundary FallbackComponent={ErrorBoundaryImpl}>
      <Main />
    </ErrorBoundary>,
    document.getElementById('root')
  );
});
