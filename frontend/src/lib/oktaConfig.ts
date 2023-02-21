export const oktaConfig = {
    clientId: '0oa8eqt2d0kV4kl7a5d7',
    issuer: 'https://dev-12445211.okta.com/oauth2/default',
    redirectUrl: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}