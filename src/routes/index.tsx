import { Auth } from 'aws-amplify';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { trackEvent } from '@/analytics/trackEvent';
import { axiosInstance } from '@/axios';
import { ErrorBoundary as ErrorBoundaryImpl } from '@/components/ErrorBoundaries/ErrorBoundary';
import { ErrorBoundaryWithReset } from '@/components/ErrorBoundaries/ErrorBoundaryWithReset';
import { LoginRedirectDialog } from '@/components/legacy_Components/Dialog/LoginRedirectDialog/LoginRedirectDialog';
import { LazyLoadingFallback } from '@/components/Loaders/LazyLoadingFallback';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { TrackRouteChange } from '@/components/TrackRouteChange';
import { useBackNavigation } from '@/hooks/useBackNavigation';
import { AuthRoute } from '@/utils/AuthRoute';
import { nativeEvent } from '@/utils/native-event';
import {
  DownloadToastError,
  DownloadToastSuccess,
  NativeDownloadSuccessToast,
} from '@/utils/toasts';

const Home = React.lazy(() => import('./index/index'));
const OAuthCallbackHandler = React.lazy(() => import('./OAuthCallback'));
const AuthComponent = React.lazy(() => import('./Auth'));
const Onboarding = React.lazy(() => import('./Onboarding'));
const ImageViewer = React.lazy(() => import('./ImageViewer'));
const PDFViewer = React.lazy(() => import('./PDFViewer'));
const CustomFeed = React.lazy(() => import('./CustomFeed'));

const AppStateWrapper: React.FunctionComponent = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const homeFeedMatch = useRouteMatch('/feeds/home');
  const firstRender = React.useRef(true);

  const goBack = useBackNavigation();

  const isHomeFeed = !!homeFeedMatch;

  const openConfirmationDialog = React.useCallback(() => {
    setOpen(true);
  }, []);

  React.useEffect(() => {
    if (isHomeFeed && firstRender.current) {
      trackEvent('everything_feed', { homeFeed: true });
      firstRender.current = false;
    }
  }, [isHomeFeed]);

  // listen events from react-native webview to determine the platform
  React.useEffect(() => {
    function handleEvent(message: MessageEvent) {
      if (message.data.device) {
        window.RN_PLATFORM = message.data.device;
        return;
      }

      if (message.data.status.includes('path:')) {
        const path = message.data.status.split(':')[1];
        history.push(path);
        return;
      }

      if (message.data.status === 'download-completed-album') {
        DownloadToastSuccess();
        return;
      }

      if (message.data.status === 'download-completed-file') {
        NativeDownloadSuccessToast();
        return;
      }

      // listen back event from react-native webview
      if (message.data.status === 'history-back') {
        goBack();
        return;
      }

      if (message.data.status === 'download-error') {
        DownloadToastError();
        return;
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener('message', handleEvent as any);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener('message', handleEvent as any);
    };
  }, [goBack, history]);

  React.useEffect(() => {
    if (import.meta.env.VITE_DISABLE_AUTH === 'true') {
      return;
    }
    /**
     * handle unauthorized status only when
     * Auth is not disabled
     */
    axiosInstance.interceptors.response.use(
      (res) => res,
      (error) => {
        if (
          error.response &&
          error.response.status &&
          error.response.status === 403
        ) {
          Auth.signOut();
          window.localStorage.removeItem('accessToken');
          openConfirmationDialog();
        }
        return Promise.reject(error);
      }
    );

    let interval: NodeJS.Timeout | null;

    const refreshSession = async () => {
      const refresh = async () => {
        await Auth.currentAuthenticatedUser({ bypassCache: true });
      };
      if (document.visibilityState === 'visible') {
        await refresh();

        interval = setInterval(async () => {
          await refresh();
        }, 4 * 60 * 1000);

        nativeEvent(['auth', JSON.stringify(true)]);
      } else {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      }
    };

    window.addEventListener('visibilitychange', refreshSession);

    return () => {
      window.removeEventListener('visibilitychange', refreshSession);
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
  }, [history, openConfirmationDialog]);

  const handleOk = () => {
    setOpen(false);
    history.push('/');
  };

  return (
    <>
      {children}
      <LoginRedirectDialog open={open} handleOk={handleOk} />
      <TrackRouteChange />
    </>
  );
};

const App = (): JSX.Element => {
  return (
    <AppStateWrapper>
      <Switch>
        <Route path='/oauth/redirect'>
          <ErrorBoundary FallbackComponent={ErrorBoundaryImpl}>
            <React.Suspense fallback={<LazyLoadingFallback />}>
              <OAuthCallbackHandler />
            </React.Suspense>
          </ErrorBoundary>
        </Route>
        <AuthRoute path='/auth'>
          <ErrorBoundary FallbackComponent={ErrorBoundaryImpl}>
            <React.Suspense fallback={<LazyLoadingFallback />}>
              <AuthComponent />
            </React.Suspense>
          </ErrorBoundary>
        </AuthRoute>
        <ProtectedRoute path='/document'>
          <ErrorBoundary
            FallbackComponent={ErrorBoundaryWithReset}
            onReset={() => history.go(-1)}
          >
            <React.Suspense fallback={<LazyLoadingFallback />}>
              <PDFViewer />
            </React.Suspense>
          </ErrorBoundary>
        </ProtectedRoute>
        <ProtectedRoute path='/'>
          <ErrorBoundary FallbackComponent={ErrorBoundaryImpl}>
            <React.Suspense fallback={<LazyLoadingFallback />}>
              <Home />
            </React.Suspense>
          </ErrorBoundary>
        </ProtectedRoute>
      </Switch>
    </AppStateWrapper>
  );
};

export default App;
