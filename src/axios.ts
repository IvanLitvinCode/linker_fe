import { Auth } from 'aws-amplify';
import axios from 'axios';
import axiosRetry, { isNetworkOrIdempotentRequestError } from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosRetry(axiosInstance, {
  retries: 2,
  retryDelay: () => 300,
  retryCondition: (error) => {
    return (
      isNetworkOrIdempotentRequestError(error) ||
      error?.response?.status === 403
    );
  },
});

/**
 * had to move it out
 * of React lifecycle, because
 * we have to make prefetch
 * requests before React lifecycle starts
 */
if (import.meta.env.VITE_DISABLE_AUTH !== 'true' && !import.meta.env.VITEST) {
  /**
   * attach JWT token only when
   * Auth is not disabled
   */
  axiosInstance.interceptors.request.use(
    async (config) => {
      const data = await Auth.currentSession();
      const jwt = data.getAccessToken().getJwtToken();

      config.headers.token = jwt;

      return config;
    },
    (error) => Promise.reject(error)
  );
}

export { axiosInstance };
