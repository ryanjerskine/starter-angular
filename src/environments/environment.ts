/**
 * This file is used for setting up environment/configuration for development. As configuration is added to
 * here, you should modify the environemnt.deployment.ts as well as the assets/js/deployment.js file. Those
 * files will be used by the CI/CD pipeline.
 */
export const environment = {
  production: false,
  authConfig: {
    // Url of the Identity Provider
    issuer: 'http://localhost:5000',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/home',
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'Organization.StarterAngularMaterial.Application',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email role',
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`
 * for easier debugging, you can import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
