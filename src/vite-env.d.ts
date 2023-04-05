/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_AWS_REGION: string;
  readonly VITE_AWS_USERPOOLID: string;
  readonly VITE_AWS_USERPOOL_WEB_CLIENT_ID: string;
  readonly VITE_QR_SERVICE_API: string;
  readonly VITE_QR_VNC: string;
  readonly VITE_MIXPANEL_ID: string;
  readonly VITE_MIXPANEL_API_HOST: string;
  readonly VITE_OAUTH_REDIRECT_SIGNIN: string;
  readonly VITE_OAUTH_REDIRECT_SIGNOUT: string;
  readonly VITE_COGNITO_DOMAIN: string;
  readonly VITE_DISABLE_AUTH: string;
  readonly VITE_USERPILOT_TOKEN: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_HOST_ENV: 'dev' | 'qa1' | 'stage-ml' | 'stage' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
