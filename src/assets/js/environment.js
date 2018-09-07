/**
 * This file is used to bypass build/deploy pipeline issues with Angular wanting to set variables
 * during build that may need to be changed during deployment. The environments/deployment.ts uses
 * this file to load variables from here that can be changed to match deployment targets.
 */
window._environemnt = {
  production: '#{ProductionEnvironment}',
  authConfig: {
    // Url of the Identity Provider
    issuer: '#{IdentityServerUrl}',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/home',
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'Organization.StarterAngularMaterial.Application',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email role',
  }
};