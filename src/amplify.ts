const authVariable = {
  mandatorySignId: true,
  region: import.meta.env.VITE_AWS_REGION,
  userPoolId: import.meta.env.VITE_AWS_USERPOOLID,
  userPoolWebClientId: import.meta.env.VITE_AWS_USERPOOL_WEB_CLIENT_ID,
  federationTarget: 'COGNITO_USER_POOLS',

  oauth: {
    domain: import.meta.env.VITE_COGNITO_DOMAIN,
    redirectSignIn: import.meta.env.VITE_OAUTH_REDIRECT_SIGNIN,
    redirectSignOut: import.meta.env.VITE_OAUTH_REDIRECT_SIGNOUT,
    responseType: 'code',
  },
};

export default authVariable;
