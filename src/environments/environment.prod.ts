import pkg from '../../package.json';

export const environment = {
  production: true,
  baseUrl: 'localhost:4200',    // TODO: Replace for a production base url when the app is deployed
  version: pkg.version,
};
